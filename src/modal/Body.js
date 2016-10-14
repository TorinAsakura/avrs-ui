import React from 'react'
import { StyleSheet } from 'elementum'
import Condition from '../condition/Condition'
import CloseIcon from '../icons/CloseIcon'

const styles = StyleSheet.create({
  self: {
    position: 'relative',
    '& #close': {
      position: 'absolute',
      right: 0,
      top: '-28px',
      color: '#ffffff',
      cursor: 'pointer',
    },
  },
})

const Body = ({ children, showClose, onClose }) => (
  <div className={styles()}>
    <Condition match={showClose}>
      <span
        id='close'
        onClick={onClose}
      >
        <CloseIcon
          height={24}
          fill='#ffffff'
        />
      </span>
    </Condition>
    {children}
  </div>
)

export default Body
