import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    border: '1px solid #aeb7be',
    width: '9px',
    height: '9px',
    margin: '5px',
    borderRadius: '50%',
    cursor: 'pointer',
    '&:hover': {
      borderColor: '#0288D1',
    },
  },
  active: {
    background: '#aeb7be',
  },
})

const Point = ({ active, onClick }) => (
  <div
    className={styles({ active })}
    onClick={onClick}
  />
)

export default Point
