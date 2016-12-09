import React, { PropTypes } from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    fontSize: '14px',
    lineHeight: '12px',
    color: '#ffffff',
    cursor: 'pointer',
    padding: '10px 20px',
    background: '#0288d1',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#0288d1',
    outline: 0,
    '&:active': {
      background: '#0665af',
    },
  },
  rounded: {
    borderRadius: '3px',
  },
  round: {
    borderRadius: '20px',
  },
  shadow: {
    boxShadow: '0px 2px 4px 0px rgba(29, 35, 42, 0.15)',
  },
  fill: {
    width: '100%',
  },
  'color=green': {
    background: '#00bb27',
    borderColor: '#00bb27',
    '&:hover': {
      background: '#03A425',
    },
  },
  'size=small': {
    paddingTop: '7px',
    paddingBottom: '7px',
  },
})

const Button = ({ children, disabled, rounded, round, shadow, color, fill, size, onClick }) => (
  <button
    disabled={disabled}
    className={styles({ disabled, rounded, round, shadow, color, fill, size })}
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
