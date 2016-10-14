import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    fontSize: '15px',
    color: '#657684',
    padding: '10px 20px',
    cursor: 'pointer',
    fontFamily: 'Ubuntu',
    '&:hover': {
      color: '#303336',
    },
  },
  active: {
    color: '#303336',
  },
})

const Tab = ({ children, active, onClick }) => (
  <div
    className={styles({ active })}
    onClick={onClick}
  >
    {children}
  </div>
)

export default Tab
