import React from 'react'
import { StyleSheet } from 'elementum'
import Condition from '../condition/Condition'
import { connect, toggle } from '../state'
import DropdownIcon from '../icons/DropdownIcon'
import Layer from '../layer/Layer'
import Input from '../input/Input'
import Options from './Options'

const styles = StyleSheet.create({
  self: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    '& svg': {
      position: 'absolute',
      top: '8px',
      right: '12px',
    },
    '& input': {
      paddingRight: '24px',
    },
  },
})

const getValue = (options, value, valueField, displayField) => {
  const [matched] = options.filter(option => option[valueField] === value)

  if (matched && matched[displayField]) {
    return matched[displayField]
  }

  return ''
}

const Select = ({
  value, invalid, options, valueField = 'value', displayField = 'label', toggled,
  onChange = f => f, onClick,
}) => (
  <div className={styles()} onClick={onClick}>
    <Input
      readOnly
      invalid={invalid}
      value={getValue(options, value, valueField, displayField)}
    />
    <DropdownIcon
      height={16}
      fill='#505458'
    />
    <Condition match={toggled}>
      <Layer onOutsideClick={onClick}>
        <Options
          options={options}
          valueField={valueField}
          displayField={displayField}
          onSelect={(selected) => {
            onChange(selected)
            onClick()
          }}
        />
      </Layer>
    </Condition>
  </div>
)

export default connect([toggle], Select)
