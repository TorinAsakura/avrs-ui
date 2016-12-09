import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    visibility: 'hidden',
  },
  ready: {
    transition: '1s',
    visibility: 'visible',
  },
})

const Screens = ({ width, height, left, ready, children = [] }) => (
  <div
    className={styles({ ready })}
    style={{ height, width, left }}
  >
    {children}
  </div>
)

export default Screens
