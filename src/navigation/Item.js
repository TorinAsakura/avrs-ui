import React from 'react'
import { StyleSheet } from 'elementum'

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

const Item = ({ children, plain, border, onClick }) => (
  <a
    onClick={onClick}
    className={styles({ plain, border })}
  >
    {children}
  </a>
)

export default Item
