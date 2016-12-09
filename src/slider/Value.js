import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    position: 'absolute',
    top: '18px',
    left: '-18px',
    color: '#657684',
    fontSize: '14px',
    fontFamily: '"Ubuntu", sans-serif',
    marginLeft: '0%',
    transition: 'top .4s ease',
    width: '50px',
    textAlign: 'center',
    cursor: 'pointer',
  },
  active: {
    color: '#0288D1',
    top: '24px',
  },
})

const Value = ({ children, active, onClick }) => (
  <div
    className={styles({ active })}
    onClick={onClick}
  >
    {children}
  </div>
)

export default Value
