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
    fontSize: '15px',
    padding: '16px 6px 15px 6px',
    margin: '0 16px',
    color: '#505458',
    borderBottom: '1px solid transparent',
  },
  active: {
    color: '#0288D1',
    borderBottom: '1px solid #0288D1',
  },
})

const TabRouteLink = ({ children, to }) => (
  <Link
    to={to}
    className={styles()}
    activeClassName={styles({ active: true })}
  >
    {children}
  </Link>
)

TabRouteLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]),
  to: PropTypes.string,
}

export default TabRouteLink
