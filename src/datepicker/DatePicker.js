import React, { PropTypes } from 'react'
import { DateUtils } from 'react-day-picker'
import Condition from '../condition/Condition'
import { connect, toggle } from '../state'
import Layer from '../layer/Layer'
import Calendar from './Calendar'
import Picker from './Picker'
import Label from './Label'

const DatePicker = ({ value, placeholder = 'Select Date', format = 'LL', toggled, onChange = f => f, onClick }) => (
  <Picker onClick={onClick}>
    <Label
      format={format}
      placeholder={placeholder}
    >
      {value}
    </Label>
    <Condition match={toggled}>
      <Layer onOutsideClick={onClick}>
        <Calendar
          selectedDays={day => DateUtils.isSameDay(value, day)}
          onDayClick={(event, day, { selected }) => {
            onChange(selected ? null : day)
            onClick()
          }}
        />
      </Layer>
    </Condition>
  </Picker>
)

DatePicker.propTypes = {
  value: PropTypes.instanceOf(Date),
  format: PropTypes.string,
  placeholder: PropTypes.string,
  toggled: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
}

export default connect([toggle], DatePicker)
