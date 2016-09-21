import React, { PropTypes } from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    height: '2px',
    background: '#0288d1',
    boxShadow: '0 1px 2px rgba(0,0,0,0.5)',
    transition: 'all 200ms ease',
  },
})

const Line = ({ progress = 0 }) => (
  <div
    className={styles()}
    style={{ width: `${progress}%` }}
  />
)

Line.propTypes = {
  progress: PropTypes.number,
}

export default Line
