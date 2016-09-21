import React, { PropTypes } from 'react'
import { StyleSheet } from 'elementum'
import RouteLink from '../link/RouteLink'

const styles = StyleSheet.create({
  self: {
    padding: '0 25px',
    display: 'flex',
  },
})

const Item = ({ children, to }) => (
  <div className={styles()}>
    <RouteLink
      to={to}
      align='center'
    >
      {children}
    </RouteLink>
  </div>
)

Item.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array,
  ]),
  to: PropTypes.string,
}

export default Item
