import React, { Component } from 'react'
import moment from 'moment'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    '& text': {
      fontSize: '11px',
      stroke: '#ffffff',
      fontWeight: 200,
      fontFamily: '"Ubuntu", sans-serif',
    },
  },
})

class Pointer extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      position: 0,
      points: props.data.map(() => 0),
      values: props.data.map(() => 0),
      show: false,
    }
  }

  getTooltipWidth() {
    const { data } = this.props
    const { values } = this.state

    const maxLen = data.reduce((result, { title }, index) => {
      const message = `${title}: ${values[index]}`.length

      if (result < message) {
        return message
      }

      return result
    }, 0)

    return (maxLen * 6) + 30
  }

  move = (event) => {
    const { data, xScale, yScale } = this.props

    const x = event.clientX - event.target.getBoundingClientRect().left

    const selected = moment(xScale.invert(x))

    const values = data.map(item => item.values.filter(({ date }) => selected.diff(date, 'days') === 0)[0])

    const position = xScale(values[0].date)
    const points = values.map(d => yScale(d.amount))

    this.setState({
      position,
      points,
      values: values.map(d => d.amount),
    })
  }

  show = () => {
    this.setState({ show: true })
  }

  hide = () => {
    this.setState({ show: false })
  }

  renderPoints() {
    const { data } = this.props
    const { points } = this.state

    return data.map(({ stroke }, index) => (
      <circle
        key={index}
        r={4}
        style={{ fill: stroke }}
        transform={`translate(0, ${points[index]})`}
      />
    ))
  }

  renderTooltip() {
    const { data, width } = this.props
    const { position } = this.state

    let left = 10
    const tooltipWidth = this.getTooltipWidth()

    if (width - (position + tooltipWidth + 20) < 0) {
      left = (tooltipWidth + 10) * -1
    }

    return (
      <g transform={`translate(${left}, 10)`}>
        <rect
          x={0}
          y={0}
          rx={4}
          ry={4}
          width={tooltipWidth}
          height={data.length * 25}
          style={{ fill: '#3F4246' }}
        />
        {this.renderMessages()}
      </g>
    )
  }

  renderMessages() {
    const { data } = this.props
    const { values } = this.state

    return data.map(({ title }, index) => (
      <text
        key={index}
        x={15}
        y={19 * (index + 1)}
      >
        {title}: {values[index]}
      </text>
    ))
  }

  render() {
    const { height } = this.props
    const { position, show } = this.state

    if (!show) {
      return null
    }

    return (
      <g
        ref={this.onSetRef}
        className={styles()}
        transform={`translate(${position}, 0)`}
      >
        <line
          stroke='#505458'
          x1={0}
          y1={0}
          x2={0}
          y2={height}
        />
        {this.renderPoints()}
        {this.renderTooltip()}
      </g>
    )
  }
}

export default Pointer
