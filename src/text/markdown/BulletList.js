import React, { Children, cloneElement } from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    margin: '0px',
    padding: '0px',
    listStyle: 'inside none',
  },
})

const BulletList = ({ children, markup }) => (
  <ul className={styles()}>
    {Children.toArray(children).map(child => cloneElement(child, { markup }))}
  </ul>
)

export default BulletList
