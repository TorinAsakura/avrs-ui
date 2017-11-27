import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    background: '#ffffff',
    border: '1px solid #e5e5e5',
    boxSizing: 'border-box',
    width: '100%',
  },
  offset: {
    padding: '20px 25px',
  },
  shadow: {
    boxShadow: '0px 1px 3px 0px rgba(29,35,42,0.15)',
    marginBottom: '3px',
  },
  'border=red': {
    borderTop: '4px solid #E75656',
  },
  'border=blue': {
    borderTop: '4px solid #0288D1',
  },
  'border=orange': {
    borderTop: '4px solid #FF6701',
  },
  'border=green': {
    borderTop: '4px solid #00BB27',
  },
  'border=hidden': {
    borderWidth: '0px',
  },
  'attach=bottom': {
    borderBottomWidth: '0px',
  },
  'fill=blue': {
    background: '#1C5D98',
  },
  'fill=transparent': {
    background: 'transparent',
  },
})

const Block = ({ children, offset, shadow, border, attach, fill }) => (
  <div className={styles({ offset, shadow, border, attach, fill })}>
    {children}
  </div>
)

export default Block
