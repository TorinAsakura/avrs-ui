import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    borderBottom: '1px solid #ddd',
    verticalAlign: 'middle',
    padding: '12px 0.8rem',
    boxSizing: 'border-box',
    fontSize: '14px',
    color: '#505458',
    fontFamily: '"Ubuntu", sans-serif',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontWeight: 400,
    textAlign: 'left',
  },
})

const Th = ({ children }) => (
  <th className={styles()}>
    {children}
  </th>
)

export default Th
