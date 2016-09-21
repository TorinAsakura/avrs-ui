import React, { PropTypes } from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    fontFamily: '"Ubuntu",sans-serif',
    fontWeight: 400,
    textDecoration: 'none',
    display: 'inline-flex',
    boxSizing: 'border-box',
    cursor: 'pointer',
  },
  'align=center': {
    alignItems: 'center',
  },
})

const Link = ({ children, align, onClick }) => (
  <a
    onClick={onClick}
    className={styles({ align })}
  >
    {children}
  </a>
)

Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]),
  onClick: PropTypes.func,
  align: PropTypes.string,
}

export default Link
