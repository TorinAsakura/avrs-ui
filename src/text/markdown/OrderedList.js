import React, { Children, cloneElement } from 'react'
import { StyleSheet } from 'elementum'
import { attrsToProps } from './utils'

const styles = StyleSheet.create({
  self: {
    margin: '0px',
    padding: '0px',
    listStyle: 'inside none',
  },
})

const OrderedList = ({ children, attrs }) => (
  <ol className={styles()}>
    {Children.toArray(children).map(child => cloneElement(child, { markup: `${attrsToProps(attrs).start || 1}.` }))}
  </ol>
)

export default OrderedList
