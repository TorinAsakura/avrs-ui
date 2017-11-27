import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    height: '100%',
    width: '250px',
    boxSizing: 'border-box',
    background: 'white',
    boxShadow: '4px 0px 12px 8px rgba(29,35,42,0.2)',
    position: 'fixed',
    top: 0,
    left: '-300px',
    zIndex: 99,
    padding: '30px 40px 0px 30px',
    overflowY: 'auto',
    transition: 'left 0.3s linear',
  },
  show: {
    left: '0px',
  },
})

const Menu = ({ children, show }) => (
  <div className={styles({ show })}>
    {children}
  </div>
)

export default Menu
