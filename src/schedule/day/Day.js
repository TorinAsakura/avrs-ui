import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import { StyleSheet } from 'elementum'
import moment from 'moment'
import Selection from './Selection'
import Hour from './Hour'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    background: '#f9f9f9',
  },
})

class Day extends Component {
  static propTypes = {
    firstDay: PropTypes.bool,
    values: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func,
  }

  static defaultProps = {
    values: [],
    onChange: f => f,
  }

  constructor(props) {
    super(props)

    this.state = {
      values: props.values,
      initialPosition: null,
      selection: null,
    }
  }

  componentDidMount() {
    this.onMount(state => this.setState(state))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.values !== this.props.values) {
      this.setState({ values: nextProps.values })
    }
  }

  onMount = (callback) => {
    const node = findDOMNode(this)
    const { top, bottom } = node.childNodes[0].getBoundingClientRect()

    callback({
      parentOffset: node.getBoundingClientRect().top,
      dayOffset: bottom - top,
    })
  }

  onChange = (values) => {
    const { onChange } = this.props

    this.setState({ values })

    if (onChange) {
      onChange(values)
    }
  }

  onClick = (event, hour) => {
    const { values } = this.state

    if (values.includes(hour)) {
      this.onChange(values.filter(value => value !== hour))
    } else {
      this.onChange(values.concat(hour))
    }
  }

  onMouseDown = (event, hour) => {
    const { values, parentOffset } = this.state
    const rect = event.target.getBoundingClientRect()

    this.setState({
      initialPosition: {
        x: event.pageY - parentOffset,
        top: rect.top - parentOffset,
        bottom: rect.bottom - parentOffset,
      },
      action: values.includes(hour) ? 'remove' : 'add',
    })

    document.addEventListener('mousemove', this.onMouseMove)
    document.addEventListener('mouseup', this.onMouseUp)
  }

  onMouseMove = (event) => {
    const { initialPosition, parentOffset, dayOffset } = this.state

    if (!initialPosition) {
      return
    }

    const currentPosition = event.pageY - parentOffset

    if (currentPosition - initialPosition.x > 0) {
      const count = Math.ceil((currentPosition - initialPosition.top) / dayOffset)

      this.setState({
        selection: {
          top: initialPosition.top,
          bottom: initialPosition.top + (count * dayOffset),
          height: count * dayOffset,
        },
      })
    } else {
      const count = Math.ceil((initialPosition.bottom - currentPosition) / dayOffset)

      this.setState({
        selection: {
          top: initialPosition.bottom - (count * dayOffset),
          bottom: initialPosition.bottom,
          height: count * dayOffset,
        },
      })
    }
  }

  onMouseUp = () => {
    const { selection, values, action, parentOffset } = this.state

    this.setState({
      initialPosition: null,
      selection: null,
      action: null,
    })

    if (!selection) {
      return
    }

    document.removeEventListener('mousemove', this.onMouseMove)
    document.removeEventListener('mouseup', this.onMouseUp)

    const time = moment().startOf('day').subtract(1, 'hour')

    const matched = Array.from(findDOMNode(this).childNodes).reduce((result, node) => {
      const rect = node.getBoundingClientRect()
      const top = rect.top - parentOffset
      const bottom = rect.bottom - parentOffset - 1

      const value = time.add(1, 'hour').format('HH:mm')

      if (selection.top < top && selection.bottom > bottom) {
        result.push(value)
      } else if (selection.top === top && selection.bottom > bottom) {
        result.push(value)
      } else if (selection.top < top && selection.bottom === bottom) {
        result.push(value)
      }

      return result
    }, [])

    if (action === 'add') {
      this.onChange(
        matched.reduce((result, item) => {
          if (!result.includes(item)) {
            result.push(item)
          }

          return result
        }, values)
      )
    } else {
      this.onChange(values.filter(value => !matched.includes(value)))
    }
  }

  getHours() {
    const start = moment().startOf('day').subtract(1, 'hour')

    return Array.from(Array(24).keys()).map(() => start.add(1, 'hour').format('HH:mm'))
  }

  renderHours() {
    const { firstDay } = this.props
    const { values } = this.state

    return this.getHours().map((hour, index) => (
      <Hour
        key={hour}
        value={hour}
        first={index === 0}
        firstDay={firstDay}
        selected={values.includes(hour)}
        onClick={this.onClick}
        onMouseDown={this.onMouseDown}
      />
    ))
  }

  renderSelection() {
    const { selection } = this.state

    if (!selection) {
      return null
    }

    return (
      <Selection {...selection} />
    )
  }

  render() {
    return (
      <div className={styles()}>
        {this.renderHours()}
        {this.renderSelection()}
      </div>
    )
  }
}

export default Day
