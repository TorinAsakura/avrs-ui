import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    fontFamily: '"Ubuntu", sans-serif',
    padding: '10px 10px 6px 10px',
    boxSizing: 'border-box',
    cursor: 'pointer',
    '&:hover': {
      background: '#f2f2f2',
    },
  },
})

const Option = ({ data, valueField, displayField, onSelect }) => (
  <div
    className={styles()}
    onClick={() => onSelect(data[valueField])}
  >
    {data[displayField]}
  </div>
)

export default Option
