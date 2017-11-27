import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    backgroundColor: '#fff',
    borderTop: '1px solid #ccc',
  },
})

const Tr = ({ children }) => (
  <tr className={styles()}>
    {children}
  </tr>
)

export default Tr
