import { createElement } from 'react'
import { StyleSheet } from 'elementum'
import { attrsToProps } from './utils'

const styles = StyleSheet.create({
  self: {
    color: '#303336',
    fontFamily: '"Ubuntu", sans-serif',
    fontWeight: 400,
    lineHeight: 1.2,
    margin: '20px 0',
  },
  'tag=h1': {},
  'tag=h2': {},
  'tag=h3': {
    fontSize: '24px',
  },
  'tag=h4': {},
  'tag=h5': {},
  'tag=h6': {},
})

const Heading = ({ children, attrs = [], tag }) =>
  createElement(
    tag,
    {
      ...attrsToProps(attrs),
      className: styles({ tag }),
    },
    children,
  )

export default Heading
