import React from 'react'
import { StyleSheet } from 'elementum'
import CompleteIcon from '../icons/CompleteIcon'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    flexGrow: '1',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '15px',
    color: '#505458',
    fontFamily: '"Ubuntu", sans-serif',
    marginLeft: '-28px',
    '& svg': {
      visibility: 'hidden',
      marginRight: '8px',
      position: 'relative',
      top: '1px',
    },
  },
  active: {
    color: '#0288D1',
    '& svg': {
      visibility: 'visible',
    },
  },
})

const Tab = ({ children, active }) => (
  <div className={styles({ active })}>
    <CompleteIcon
      height={18}
      fill='#0288D1'
    />
    {children}
  </div>
)

export default Tab
