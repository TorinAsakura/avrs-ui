import React, { PropTypes } from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    fontSize: '13px',
    color: '#FFF',
    cursor: 'pointer',
    width: '120px',
    height: '30px',
    borderRadius: '0px',
    lineHeight: '12px',
    textAlign: 'center',
    overflow: 'hidden',
    background: '#0288d1',
    boxShadow: 'none',
    borderWidth: 0,
    outline: 0,
    '&:hover': {
      opacity: 0.9,
    },
    '&:active': {
      background: '#0665af',
    },
  },
})

const Button = ({ children, disabled, onClick }) => (
  <button
    disabled={disabled}
    className={styles({ disabled })}
    onClick={onClick}
  >
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Button
