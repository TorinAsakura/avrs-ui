import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '14px',
    height: '14px',
    boxSizing: 'border-box',
    background: '#ffffff',
    border: '3px solid #e5e5e5',
    borderRadius: '50%',
    cursor: 'pointer',
    '&:hover': {
      borderColor: '#0288D1',
    },
  },
})

const Tick = ({ onClick }) => (
  <div
    className={styles()}
    onClick={onClick}
  />
)

export default Tick
