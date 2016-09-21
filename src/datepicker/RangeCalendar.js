import React, { Component, PropTypes } from 'react'
import { DateUtils } from 'react-day-picker'
import Calendar from './Calendar'

class RangeCalendar extends Component {
  static propTypes = {
    from: PropTypes.instanceOf(Date),
    to: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = {
      isSelectingLastDay: false,
      from: props.from,
      to: props.to,
    }
  }

  componentDidUpdate() {
    const { onChange } = this.props
    const { from, to, isSelectingLastDay } = this.state

    if (!isSelectingLastDay && from && to) {
      onChange({ from, to })
    }
  }

  handleDayClick = (e, day) => {
    const { from, isSelectingLastDay } = this.state

    if (!isSelectingLastDay) {
      this.setState({
        isSelectingLastDay: true,
        from: day,
        to: null,
      })
    }

    if (isSelectingLastDay && from && day < from) {
      this.setState({
        from: day,
        to: null,
      })
    }

    if (isSelectingLastDay && DateUtils.isSameDay(day, from)) {
      this.reset()
    }

    if (isSelectingLastDay) {
      this.setState({ isSelectingLastDay: false })
    }
  }

  handleDayMouseEnter = (e, day) => {
    const { isSelectingLastDay, from } = this.state

    if (!isSelectingLastDay || (from && day < from) || DateUtils.isSameDay(day, from)) {
      return
    }

    this.setState({ to: day })
  }

  reset = () => {
    this.setState({
      from: null,
      to: null,
      isSelectingLastDay: false,
    })
  }

  render() {
    const { from, to } = this.state

    return (
      <Calendar
        fromMonth={from}
        selectedDays={day => DateUtils.isDayInRange(day, { from, to })}
        modifiers={{
          from: day => DateUtils.isSameDay(day, from),
          to: day => DateUtils.isSameDay(day, to),
        }}
        onDayClick={this.handleDayClick}
        onDayMouseEnter={this.handleDayMouseEnter}
      />
    )
  }
}

export default RangeCalendar
