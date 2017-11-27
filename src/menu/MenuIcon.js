import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '18px',
    height: '18px',
    position: 'relative',
    transform: 'rotate(0deg)',
    cursor: 'pointer',
    outline: 'none',
    '& span': {
      display: 'block',
      position: 'absolute',
      zIndex: 2,
      height: '2px',
      width: '100%',
      background: '#3f4246',
      borderRadius: '9px',
      opacity: '1',
      left: 0,
      transform: 'rotate(0deg)',
      transition: '.3s ease-in-out',
    },
    '& span:nth-child(1)': {
      top: '0px',
    },
    '& span:nth-child(2)': {
      top: '6px',
    },
    '& span:nth-child(3)': {
      top: '6px',
    },
    '& span:nth-child(4)': {
      top: '12px',
    },
  },
  open: {
    '& span:nth-child(1)': {
      top: '6px',
      width: '0%',
      left: '50%',
    },
    '& span:nth-child(2)': {
      transform: 'rotate(45deg)',
    },
    '& span:nth-child(3)': {
      transform: 'rotate(-45deg)',
    },
    '& span:nth-child(4)': {
      top: '6px',
      width: '0%',
      left: '50%',
    },
  },
  light: {
    '& span': {
      background: '#ffffff',
    },
  },
})

const MenuIcon = ({ open, light }) => (
  <div className={styles({ open, light })}>
    <span />
    <span />
    <span />
    <span />
  </div>
)

export default MenuIcon
