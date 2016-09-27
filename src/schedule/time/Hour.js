import React, { PropTypes } from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    fontSize: '14px',
    fontFamily: 'Ubuntu',
    height: '20px',
    boxSizing: 'border-box',
    borderTop: '1px solid transparent',
    borderBottom: '1px solid transparent',
  },
})

const Hour = ({ children }) => (
  <div className={styles()}>
    {children}
  </div>
)

Hour.propTypes = {
  children: PropTypes.string,
}

export default Hour
