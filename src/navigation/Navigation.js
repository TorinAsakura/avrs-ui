import React, { PropTypes } from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    height: '100%',
    display: 'flex',
    background: '#ffffff',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
})

const Navigation = ({ children }) => (
  <div className={styles()}>
    {children}
  </div>
)

Navigation.propTypes = {
  children: PropTypes.element,
}

export default Navigation
