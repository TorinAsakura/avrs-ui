import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    flexGrow: 1,
    height: '7px',
    padding: '3px 0',
    cursor: 'pointer',
    '&:before': {
      content: '" "',
      height: '3px',
      width: '100%',
      background: '#e5e5e5',
      marginTop: '3px',
    },
  },
})

const Gap = ({ onClick }) => (
  <div
    className={styles()}
    onClick={onClick}
  />
)

export default Gap
