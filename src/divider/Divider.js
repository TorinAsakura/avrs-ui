import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    height: '1px',
    background: '#E1E4E6',
  },
  vertical: {
    width: '1px',
    height: 'auto',
  },
  transparent: {
    opacity: 0.2,
  },
  'color=white': {
    background: '#ffffff',
  },
})

const Divider = ({ vertical, color, transparent }) => (
  <div className={styles({ vertical, color, transparent })} />
)

export default Divider
