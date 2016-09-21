import React, { PropTypes } from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    borderRadius: '50%',
  },
  bordered: {
    padding: '4px',
    border: '1px solid #f2f2f2',
  },
})

const Photo = ({ src, size = 35, bordered }) => (
  <img
    alt='User placeholder'
    src={src}
    width={`${size}px`}
    height={`${size}px`}
    className={styles({ bordered })}
  />
)

Photo.propTypes = {
  src: PropTypes.string,
  size: PropTypes.number,
  bordered: PropTypes.bool,
}

export default Photo
