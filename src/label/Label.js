import React, { PropTypes } from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'inline-flex',
    fontFamily: '"Ubuntu", sans-serif',
    fontWeight: 400,
    lineHeight: 1.2,
    color: '#303336',
    fontSize: '14px',
    marginLeft: '5px',
  },
})

const Label = ({ children }) => (
  <span className={styles()}>
    {children}
  </span>
)

Label.propTypes = {
  children: PropTypes.node,
}

export default Label
