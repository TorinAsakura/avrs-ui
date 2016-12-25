import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    position: 'relative',
    width: '350px',
    padding: '18px',
    background: '#00BB27',
    boxSizing: 'border-box',
    borderRadius: '0px',
    fontSize: '13px',
    color: '#ffffff',
    cursor: 'pointer',
    border: '1px solid #E5E5E5',
    boxShadow: '0 1px 3px 0 rgba(29,35,42,0.15)',
  },
  'color=blue': {
    background: '#0288D1',
  },
  'color=red': {
    background: '#E75656',
  },
})

const Notice = ({ children, style, color, onClick }) => (
  <div style={{ ...style, position: 'relative', marginTop: 10 }}>
    <div
      className={styles({ color })}
      onClick={onClick}
    >
      {children}
    </div>
  </div>
)

export default Notice
