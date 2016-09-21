import React, { PropTypes } from 'react'
import Icon from './Icon'
import { rotate } from './utils'

const TriangleIcon = ({ right, down, left, ...props }) => (
  <Icon originalWidth={24} originalHeight={32} {...props}>
    <g transform={rotate({ right, down, left }, 24, 32)}>
      <path d='M11.992 8l-11.992 11.992h23.984l-11.992-11.992z' />
    </g>
  </Icon>
)

TriangleIcon.propTypes = {
  right: PropTypes.bool,
  down: PropTypes.bool,
  left: PropTypes.bool,
}

export default TriangleIcon
