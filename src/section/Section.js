import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    display: 'flex',
  },
  'color=gray': {
    background: 'linear-gradient(135deg, #f8f9fc 0%,#eef1f4 100%)',
  },
  'color=blue': {
    background: 'linear-gradient(135deg, #1C5D98 0%,#1C7DB9 100%)',
  },
  'color=black': {
    background: '#1d232a',
  },
})

const Section = ({ children, id, color }) => (
  <div
    id={id}
    className={styles({ color })}
  >
    {children}
  </div>
)

export default Section
