import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {},
})

const Text = ({ content }) => (
  <span className={styles()}>
    {content}
  </span>
)

export default Text
