import React from 'react'
import Icon from '../Icon'

const De = props => (
  <Icon originalWidth={5} originalHeight={3} {...props}>
    <rect width='5' height='3' y='0' x='0' fill='#000' />
    <rect width='5' height='2' y='1' x='0' fill='#D00' />
    <rect width='5' height='1' y='2' x='0' fill='#FFCE00' />
  </Icon>
)

export default De
