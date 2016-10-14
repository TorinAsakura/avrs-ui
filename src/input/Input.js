import React, { PropTypes } from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    height: '32px',
    boxSizing: 'border-box',
    background: 'transparent',
    boxShadow: 'none',
    border: '1px solid #e5e5e5',
    borderRadius: '3px',
    padding: '0 12px',
    fontFamily: '"Ubuntu",sans-serif',
    fontWeight: 400,
    fontSize: '14px',
    color: '#262626',
    appearance: 'none',
    outline: 'none',
    '&:focus': {
      borderColor: '#0288d1',
    },
    '&::-webkit-input-placeholder': {
      fontWeight: 300,
      color: '#b9b9b9',
    },
  },
  disabled: {
    opacity: 0.6,
  },
  invalid: {
    borderColor: '#ff0000',
  },
})

const Input = ({ value, disabled, invalid, onChange, ...props }) => (
  <input
    {...props}
    value={value}
    disabled={disabled}
    className={styles({ disabled, invalid })}
    onChange={({ target }) => onChange && onChange(target.value)}
  />
)

Input.propTypes = {
  value: PropTypes.string,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  onChange: PropTypes.func,
}

export default Input
