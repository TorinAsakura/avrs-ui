import React from 'react'
import Icon from './Icon'

const MessageIcon = props => (
  <Icon originalWidth={15} originalHeight={15} {...props}>
    <g>
      <path
        d='M13.5,0 L1.5,0 C0.671572875,0 0,0.671572875 0,1.5
          L0,15 L3,12 L13.5,12 C14.3284271,12 15,11.3284271
          15,10.5 L15,1.5 C15,0.6675 14.325,0 13.5,0 L13.5,0 Z'
      />
    </g>
  </Icon>
)

export default MessageIcon
