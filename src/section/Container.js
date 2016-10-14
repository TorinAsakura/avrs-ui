import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    display: 'flex',
    overflowY: 'auto',
    zIndex: 2,
  },
})

const Container = ({ children }) => (
  <div className={styles()}>
    {children}
  </div>
)

export default Container
