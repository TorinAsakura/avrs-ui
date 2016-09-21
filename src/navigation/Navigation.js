import React, { PropTypes } from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    background: '#ffffff',
    borderBottom: '2px solid #eee',
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
