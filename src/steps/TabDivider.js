import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    width: '60px',
    height: '60px',
    position: 'relative',
    '&:before': {
      content: '" "',
      position: 'absolute',
      right: '38px',
      bottom: '26px',
      width: '1px',
      height: '40px',
      background: '#E5E5E5',
      transform: 'rotate(145deg)',
    },
    '&:after': {
      content: '" "',
      position: 'absolute',
      right: '38px',
      top: '26px',
      width: '1px',
      height: '40px',
      background: '#E5E5E5',
      transform: 'rotate(35deg)',
    },
  },
})

const TabDivider = () => (
  <div className={styles()} />
)

export default TabDivider
