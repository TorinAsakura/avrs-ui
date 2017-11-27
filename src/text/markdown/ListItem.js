import React, { cloneElement } from 'react'

const renderChildren = ([first, ...rest], markup) => [
  cloneElement(first, null, [`${markup} `].concat(first.props.children)),
  ...rest,
]

const ListItem = ({ children, markup }) => (
  <li>
    {renderChildren(children, markup)}
  </li>
)

export default ListItem
