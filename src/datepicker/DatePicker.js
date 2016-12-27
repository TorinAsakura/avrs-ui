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
    placeholder: 'Select Date',
    format: 'LL',
  }

  state = {
    value: null,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: null })
    }
  }

  onChange = (value) => {
    this.setState({ value })
  }

  onEndEdit = () => {
    const { value } = this.state
    const { onChange } = this.props

    if (moment(value).isValid()) {
      onChange(moment(value).toDate())
    }
  }

  getValue() {
    const { value } = this.state

    if (value) {
      return value
    }

    if (this.props.value) {
      return moment(this.props.value).format('DD.MM.YYYY')
    }

    return ''
  }

  render() {
    const { value, placeholder, invalid, toggled, onChange, onClick } = this.props

    return (
      <div
        className={styles()}
        onClick={onClick}
      >
        <Input
          invalid={invalid}
          placeholder={placeholder}
          value={this.getValue()}
          onBlur={this.onEndEdit}
          onChange={this.onChange}
        />
        <Condition match={toggled}>
          <Layer onOutsideClick={onClick}>
            <Calendar
              external
              selectedDays={day => DateUtils.isSameDay(value, day)}
              onDayClick={(event, day, { selected }) => {
                onChange(selected ? null : day)
                onClick()
              }}
            />
          </Layer>
        </Condition>
      </div>
    )
  }
}

DatePicker.propTypes = {
  value: PropTypes.instanceOf(Date),
  format: PropTypes.string,
  placeholder: PropTypes.string,
  toggled: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
}

export default connect([toggle], DatePicker)
