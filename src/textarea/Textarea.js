import React, { PropTypes } from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    resize: 'none',
    boxSizing: 'border-box',
    background: 'transparent',
    boxShadow: 'none',
    border: '1px solid #e5e5e5',
    borderRadius: '3px',
    padding: '8px 12px',
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

const Textarea = ({ value, disabled, invalid, onChange, ...props }) => (
  <textarea
    {...props}
    value={value}
    disabled={disabled}
    className={styles({ disabled, invalid })}
    onChange={({ target }) => onChange && onChange(target.value)}
  />
)

Textarea.propTypes = {
  value: PropTypes.string,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  onChange: PropTypes.func,
}

export default Textarea
