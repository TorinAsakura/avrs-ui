import React, { PropTypes } from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    fontSize: '14px',
    lineHeight: '12px',
    cursor: 'pointer',
    padding: '10px 20px',
    borderWidth: '1px',
    borderStyle: 'solid',
    background: 'transparent',
    textDecoration: 'none',
    outline: 0,
  },
  rounded: {
    borderRadius: '3px',
  },
  round: {
    borderRadius: '20px',
  },
  fill: {
    width: '100%',
  },
  'color=gray': {
    color: '#778997',
    borderColor: '#E5E5E5',
    '&:hover': {
      background: 'rgba(229, 229, 229, 0.15)',
    },
  },
  'color=white': {
    color: '#ffffff',
    borderColor: '#ffffff',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.15)',
    },
  },
  'color=blue': {
    color: '#0288d1',
    borderColor: '#0288d1',
    '&:hover': {
      background: 'rgba(0, 121, 192, 0.02)',
    },
  },
  'size=small': {
    paddingTop: '7px',
    paddingBottom: '7px',
  },
})

const GhostButton = ({ children, disabled, rounded, round, color = 'gray', fill, size, onClick }) => (
  <button
    disabled={disabled}
    className={styles({ disabled, rounded, round, color, fill, size })}
    onClick={onClick}
  >
    {children}
  </button>
)

GhostButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}

export default GhostButton
