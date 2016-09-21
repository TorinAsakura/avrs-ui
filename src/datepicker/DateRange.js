import React, { PropTypes } from 'react'
import Condition from '../condition/Condition'
import { connect, toggle } from '../state'
import Layer from '../layer/Layer'
import RangeCalendar from './RangeCalendar'
import Picker from './Picker'
import Label from './Label'
import Divider from './Divider'

const defaultPlaceholder = {
  from: 'Start Date',
  to: 'End Date',
}

const DateRange = ({
  value = {},
  format = 'LL',
  placeholder = defaultPlaceholder,
  toggled,
  onChange = f => f,
  onClick,
}) => (
  <Picker onClick={onClick}>
    <Label
      format={format}
      placeholder={placeholder.from}
    >
      {value.from}
    </Label>
    <Divider />
    <Label
      format={format}
      placeholder={placeholder.to}
    >
      {value.to}
    </Label>
    <Condition match={toggled}>
      <Layer onOutsideClick={onClick}>
        <RangeCalendar
          from={value.from}
          to={value.to}
          onChange={(...args) => {
            onChange(...args)
            onClick()
          }}
        />
      </Layer>
    </Condition>
  </Picker>
)

DateRange.propTypes = {
  value: PropTypes.shape({
    from: PropTypes.instanceOf(Date),
    to: PropTypes.instanceOf(Date),
  }),
  format: PropTypes.string,
  placeholder: PropTypes.string,
  toggled: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
}

export default connect([toggle], DateRange)
