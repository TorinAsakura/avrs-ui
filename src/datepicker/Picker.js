import React, { PropTypes } from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    background: '#ffffff',
    border: '1px solid #cacccd',
    display: 'inline-flex',
    padding: '8px',
    cursor: 'pointer',
  },
})

const Picker = ({ children, onClick }) => (
  <div
    className={styles()}
    onClick={onClick}
  >
    {children}
  </div>
)

Picker.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  onClick: PropTypes.func,
}

export default Picker
