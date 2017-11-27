import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    fontWeight: 400,
  },
})

const Strong = ({ children }) => (
  <strong className={styles()}>
    {children}
  </strong>
)

export default Strong
