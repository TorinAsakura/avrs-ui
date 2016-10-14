import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    margin: '0px 0px 1px 0px',
    borderCollapse: 'collapse',
  },
})

const Table = ({ children }) => (
  <table className={styles()}>
    {children}
  </table>
)

export default Table
