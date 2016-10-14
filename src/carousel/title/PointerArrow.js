import React from 'react'
import { StyleSheet } from 'elementum'
import Layer from '../../layer/Layer'

const styles = StyleSheet.create({
  self: {
    transition: '0.5s',
    position: 'relative',
    '&::before': {
      content: '" "',
      position: 'absolute',
      bottom: '-5px',
      width: 0,
      height: 0,
      borderLeft: '10px solid transparent',
      borderRight: '10px solid transparent',
      borderTop: '8px solid #ccc8c8',
      zIndex: 1,
    },
    '&::after': {
      content: '" "',
      position: 'absolute',
      bottom: '-4px',
      width: 0,
      height: 0,
      borderLeft: '10px solid transparent',
      borderRight: '10px solid transparent',
      borderTop: '8px solid white',
      zIndex: 2,
    },
  },
})

const PointerArrow = ({ offset }) => (
  <Layer>
    <div
      className={styles()}
      style={{ left: offset }}
    />
  </Layer>
)

export default PointerArrow
