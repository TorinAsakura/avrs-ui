import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    overflow: 'auto',
    wordBreak: 'keep-all',
    marginTop: 0,
    marginBottom: '16px',
    borderSpacing: 0,
    borderCollapse: 'collapse',
    borderTop: '1px solid #ddd',
    borderRight: '1px solid #ddd',
    borderLeft: '1px solid #ddd',
  },
})

const Table = ({ children }) => (
  <table className={styles()}>
    {children}
  </table>
)

export default Table
