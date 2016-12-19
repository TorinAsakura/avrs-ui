import React from 'react'
import Icon from './Icon'

const AccountIcon = props => (
  <Icon originalWidth={24} originalHeight={24} {...props}>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <circle fill='#F2F2F2' cx='12' cy='12' r='12' />
      <path
        fill='#778997'
        d='M12,6 C13.6568542,6 15,7.34314575 15,9 C15,10.6568542
          13.6568542,12 12,12 C10.3431458,12 9,10.6568542 9,9 C9,
          7.34314575 10.3431458,6 12,6 L12,6 Z M12,13.5 C15.315,
          13.5 18,14.8425 18,16.5 L18,18 L6,18 L6,16.5 C6,14.8425
          8.685,13.5 12,13.5 L12,13.5 Z'
      />
    </g>
  </Icon>
)

export default AccountIcon
