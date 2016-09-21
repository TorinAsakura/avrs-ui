import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    fontFamily: '"Ubuntu",sans-serif',
    fontWeight: 400,
    textDecoration: 'none',
    display: 'inline-flex',
    boxSizing: 'border-box',
  },
  'align=center': {
    alignItems: 'center',
  },
})

const RouteLink = ({ children, to, align }) => (
  <Link
    to={to}
    className={styles({ align })}
  >
    {children}
  </Link>
)

RouteLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]),
  to: PropTypes.string,
  align: PropTypes.string,
}

export default RouteLink
