import React, { Component } from 'react'
import moment from 'moment'
import { StyleSheet } from 'elementum'
import { Column, Layout } from 'flex-layouts'
import Weekday from './Weekday'
import Hour from './Hour'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.015)',
    },
  },
})

class Day extends Component {
  static defaultProps = {
    values: [],
    onChange: f => f,
  }

  constructor(props) {
    super(props)

    this.state = {
      values: props.values,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.values !== this.props.values) {
      this.setState({ values: nextProps.values })
    }
  }

  onChange = (event, hour) => {
    const { onChange } = this.props

    if (onChange) {
      onChange(hour)
    }
  }

  getHours() {
    const start = moment().startOf('day').subtract(1, 'hour')

    return Array.from(Array(24).keys()).map(() => start.add(1, 'hour').format('HH:mm'))
  }

  renderHours(dayWidth) {
    const { values } = this.state

    return this.getHours().map((hour, index) => (
      <Layout
        key={index}
        basis={`${dayWidth}px`}
      >
        {this.renderHour(hour, values)}
      </Layout>
    ))
  }

  renderHour(hour, values) {
    const [matched] = values.filter(value => value.values.includes(hour))

    if (matched) {
      return (
        <Hour
          selected
          value={hour}
          color={matched.color}
          active={matched.active}
          onClick={this.onChange}
        />
      )
    }

    return (
      <Hour
        value={hour}
        selected={false}
        onClick={this.onChange}
      />
    )
  }

  render() {
    const { day, weekdayWidth, dayWidth } = this.props

    return (
      <div className={styles()}>
        <Column>
          <Layout basis={`${weekdayWidth}px`}>
            <Weekday>
              {day}
            </Weekday>
          </Layout>
          {this.renderHours(dayWidth)}
        </Column>
      </div>
    )
  }
}

export default Day
