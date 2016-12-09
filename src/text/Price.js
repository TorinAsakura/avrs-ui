import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    background: '#0288D1',
    borderRadius: '12px',
    padding: '5px 8px',
    display: 'inline-flex',
    fontFamily: '"Ubuntu", sans-serif',
    fontWeight: 400,
    lineHeight: 1.2,
    fontSize: '14px',
    marginLeft: '6px',
    color: '#ffffff',
  },
})

const Price = ({ children }) => (
  <span className={styles()}>
    {children}
  </span>
)

export default Price
