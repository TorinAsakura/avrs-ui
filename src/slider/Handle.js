import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    height: '20px',
    width: '20px',
    borderRadius: '50%',
    boxSizing: 'border-box',
    background: '#0288D1',
    position: 'absolute',
    top: '-3px',
    transition: 'left .4s ease',
  },
})

const Handle = ({ position = 0 }) => (
  <div
    className={styles()}
    style={{ left: position - 10 }}
  />
)

export default Handle
