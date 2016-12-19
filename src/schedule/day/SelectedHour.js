import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    boxSizing: 'border-box',
    position: 'absolute',
    width: 'auto',
    top: '1px',
    bottom: '1px',
    right: '-1px',
    left: '-1px',
    opacity: 0.3,
  },
  active: {
    opacity: 0.5,
    '&:hover': {
      opacity: 0.6,
    },
  },
})

const SelectedHour = ({ active, color = '#0288D1' }) => (
  <div
    style={{ background: color }}
    className={styles({ active })}
  />
)

export default SelectedHour
