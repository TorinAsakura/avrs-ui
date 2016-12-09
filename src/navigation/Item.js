import React, { PropTypes } from 'react'
import { StyleSheet } from 'elementum'
import { Link } from 'react-router'

const styles = StyleSheet.create({
  self: {
    padding: '16px 25px',
    display: 'flex',
    width: 'initial',
    boxSizing: 'border-box',
    cursor: 'pointer',
    fontFamily: '"Ubuntu", sans-serif',
    fontWeight: 400,
    lineHeight: 1,
    fontSize: '15px',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#505458',
    '& svg': {
      fill: '#505458',
    },
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.02)',
    },
  },
  plain: {
    padding: '16px',
  },
  'border=left': {
    borderLeft: '1px solid #E1E4E6',
  },
})

const Item = ({ children, to, plain, onlyActiveOnIndex, border }) => (
  <Link
    to={to}
    className={styles({ plain, border })}
    activeClassName={styles({ active: true })}
    onlyActiveOnIndex={onlyActiveOnIndex}
  >
    {children}
  </Link>
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
