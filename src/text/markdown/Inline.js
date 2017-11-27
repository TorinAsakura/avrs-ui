import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {},
})

const Inline = ({ children, content }) => {
  const value = children && children.length > 0 ? children : content

  return (
    <span className={styles()}>
      {value}
    </span>
  )
}

export default Inline
