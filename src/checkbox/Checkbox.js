import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    position: 'relative',
    width: '16px',
    height: '16px',
    border: '1px solid #778997',
    display: 'inline-block',
    verticalAlign: 'text-bottom',
    borderRadius: '2px',
    '&:before': {
      content: '" "',
      transformOrigin: '80% 85%',
      width: '30%',
      height: '60%',
      position: 'absolute',
      borderBottom: '3px solid #0288D1',
      borderRight: '3px solid #0288D1',
      opacity: '0',
      transition: 'transform 0.2s, opacity 0.1s',
    },
    '& > input': {
      opacity: '0',
      width: '100%',
      height: '100%',
      margin: '0',
      padding: '0',
      cursor: 'pointer',
    },
  },
  checked: {
    borderColor: '#0288D1',
    '&:before': {
      transform: 'rotate(45deg)',
      opacity: '1',
    },
  },
  'type=desktop': {
    width: '14px',
    height: '14px',
    border: '1px solid #505458',
    borderRadius: '0px',
    '&:before': {
      transformOrigin: '75% 100%',
      borderBottom: '2px solid #505458',
      borderRight: '2px solid #505458',
    },
  },
  disabled: {
    opacity: '0.5',
    '& > input': {
      cursor: 'initial',
    },
  },
})

const Checkbox = ({ value, type, disabled, onChange }) => (
  <div className={styles({ checked: value, type })}>
    <input
      type='checkbox'
      checked={value}
      disabled={disabled}
      onChange={() => onChange(!value)}
    />
  </div>
)

export default Checkbox
