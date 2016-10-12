import React, { PropTypes } from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    position: 'absolute',
    left: 0,
    width: '100%',
    background: 'rgba(0, 0, 0, 0.1)',
  },
})

const Selection = ({ top, bottom, height }) => (
  <div
    className={styles()}
    style={{ top, bottom, height }}
  />
)

Selection.propTypes = {
  top: PropTypes.number,
  bottom: PropTypes.number,
  height: PropTypes.number,
}

export default Selection
