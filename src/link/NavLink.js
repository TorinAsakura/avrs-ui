import React, { Component } from 'react'
import { Link, withRouter } from 'react-router'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    color: '#3F4246',
    textDecoration: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    lineHeight: '15px',
    fontFamily: '"Ubuntu",sans-serif',
    fontWeight: 400,
    WebkitAppRegion: 'no-drag',
    '&:hover': {
      opacity: 0.8,
    },
  },
  active: {
    color: '#0665AF',
  },
  light: {
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover': {
      color: '#ffffff',
    },
  },
})

class NavLink extends Component {
  isActive() {
    const { to, router } = this.props
    const { pathname } = router.getCurrentLocation()

    if (pathname) {
      if (to === '/') {
        return pathname === to
      }

      return pathname.indexOf(to) === 0
    }

    return false
  }

  render() {
    const { children, to, light } = this.props
    const active = this.isActive()

    return (
      <Link
        to={to}
        className={styles({ light, active })}
      >
        {children}
      </Link>
    )
  }
}

export default withRouter(NavLink)
