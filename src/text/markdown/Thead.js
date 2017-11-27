import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'table-header-group',
    verticalAlign: 'middle',
    borderColor: 'inherit',
  },
})

const Thead = ({ children }) => (
  <thead className={styles()}>
    {children}
  </thead>
)

export default Thead
