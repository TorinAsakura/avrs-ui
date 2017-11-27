import React from 'react'
import { Link } from 'react-router'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    fontFamily: '"Ubuntu",sans-serif',
    fontWeight: 400,
    textDecoration: 'none',
    display: 'inline-flex',
    boxSizing: 'border-box',
    fontSize: '13px',
    padding: '9px 48px 9px 32px',
    margin: '0 0 6px 0',
    color: '#505458',
    borderLeft: '3px solid transparent',
  },
  active: {
    color: '#0288D1',
    borderLeft: '3px solid #0288D1',
  },
})

const NavRouteLink = ({ children, to }) => (
  <Link
    to={to}
    className={styles()}
    activeClassName={styles({ active: true })}
  >
    {children}
  </Link>
)

export default NavRouteLink
