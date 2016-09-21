import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'inline-flex',
    margin: '0 10px',
  },
})

const Divider = () => (
  <div className={styles()}>
    -
  </div>
)

export default Divider
