import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    background: '#0288d1',
    borderBottomColor: '#0288d1',
    opacity: 0.6,
    height: '100%',
    boxSizing: 'border-box',
    position: 'relative',
    left: '4px',
    right: '4px',
    width: 'calc(100% - 8px)',
  },
})

const SelectedHour = () => (
  <div className={styles()} />
)

export default SelectedHour
