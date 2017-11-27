import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'table-row-group',
    verticalAlign: 'middle',
    borderColor: 'inherit',
  },
})

const Tbody = ({ children }) => (
  <tbody className={styles()}>
    {children}
  </tbody>
)

export default Tbody
