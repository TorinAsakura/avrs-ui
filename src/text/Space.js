import React, { PropTypes } from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'inline-flex',
  },
})

const Space = ({ count = 1 }) => (
  <span className={styles()}>
    {'\u00A0'.repeat(count)}
  </span>
)

Space.propTypes = {
  count: PropTypes.number,
}

export default Space
