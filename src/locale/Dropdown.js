import React from 'react'
import { StyleSheet } from 'elementum'
import DropdownItem from './DropdownItem'

const styles = StyleSheet.create({
  self: {
    background: '#ffffff',
    border: '1px solid #E5E5E5',
    boxShadow: '0 2px 5px 0 rgba(29,35,42,0.15)',
    padding: '4px 0px',
    position: 'relative',
    '&:before': {
      content: '" "',
      position: 'absolute',
      width: '0',
      height: '0',
      top: '-9px',
      left: '50%',
      marginLeft: '-14px',
      borderLeft: '14px solid transparent',
      borderRight: '14px solid transparent',
      borderBottom: '9px solid #e5e5e5',
    },
    '&:after': {
      content: '" "',
      position: 'absolute',
      width: '0',
      height: '0',
      top: '-8px',
      left: '50%',
      marginLeft: '-14px',
      borderLeft: '14px solid transparent',
      borderRight: '14px solid transparent',
      borderBottom: '9px solid #ffffff',
    },
  },
})

const Dropdown = ({ onChange }) => (
  <div className={styles()}>
    <DropdownItem
      name='en'
      onClick={onChange}
    />
    <DropdownItem
      name='ru'
      onClick={onChange}
    />
    <DropdownItem
      name='de'
      onClick={onChange}
    />
  </div>
)

export default Dropdown
