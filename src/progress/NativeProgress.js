import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '100%',
  },
})

const NativeProgress = ({ value = 0 }) => (
  <progress
    max={100}
    value={value}
    className={styles()}
  />
)

export default NativeProgress
