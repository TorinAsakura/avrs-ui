import React, { PropTypes, Component } from 'react'
import moment from 'moment'
import { DateUtils } from 'react-day-picker'
import { StyleSheet } from 'elementum'
import Condition from '../condition/Condition'
import { connect, toggle } from '../state'
import Layer from '../layer/Layer'
import Input from '../input/Input'
import Calendar from './Calendar'

const styles = StyleSheet.create({
  self: {
    width: '100%',
  },
})

class DatePicker extends Component {
  static defaultProps = {
    placeholder: 'ДД.ММ.ГГГГ',
    format: 'LL',
  }

  constructor(props, context) {
    super(props, context)

    this.state = {
      value: props.value,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value })
    }
  }

  onChange = (value) => {
    this.setState({ value })
  }

  onSelect = (event, day) => {
    const { onChange, onClick } = this.props
    const value = moment(new Date(day)).format('DD.MM.YYYY')

    onChange(value)
    onClick()
  }

  onEndEdit = () => {
    const { onChange } = this.props
    const { value } = this.state

    if (onChange) {
      onChange(value)
    }
  }

  getInitialMonth() {
    const value = moment(this.state.value, 'DD.MM.YYYY', true)

    if (value.isValid()) {
      return value.toDate()
    }

    return new Date()
  }

  render() {
    const { placeholder, invalid, toggled, onClick } = this.props
    const { value } = this.state
    const selectedDay = moment(value, 'DD.MM.YYYY', true).toDate()

    return (
      <div
        className={styles()}
        onClick={onClick}
      >
        <Input
          value={value}
          invalid={invalid}
          mask='11.11.1111'
          placeholder={placeholder}
          onBlur={this.onEndEdit}
          onChange={this.onChange}
        />
        <Condition match={toggled}>
          <Layer onOutsideClick={onClick}>
            <Calendar
              external
              initialMonth={this.getInitialMonth()}
              selectedDays={day => DateUtils.isSameDay(selectedDay, day)}
              onDayClick={this.onSelect}
            />
          </Layer>
        </Condition>
      </div>
    )
  }
}

DatePicker.propTypes = {
  format: PropTypes.string,
  placeholder: PropTypes.string,
  toggled: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
}

export default connect([toggle], DatePicker)
