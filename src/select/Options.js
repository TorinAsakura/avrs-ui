import React from 'react'
import { StyleSheet } from 'elementum'
import Option from './Option'

const styles = StyleSheet.create({
  self: {
    background: '#ffffff',
    border: '1px solid #e5e5e5',
    minWidth: '300px',
    marginTop: '2px',
    borderRadius: '3px',
    maxHeight: '200px',
    overflowY: 'auto',
  },
})

const Options = ({ valueField, displayField, options = [], onSelect }) => (
  <div className={styles()}>
    {options.map((option, index) => (
      <Option
        key={index}
        data={option}
        valueField={valueField}
        displayField={displayField}
        onSelect={onSelect}
      />
    ))}
  </div>
)

export default Options
