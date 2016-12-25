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
    '&:hover': {
      textDecoration: 'underline',
      '& *': {
        textDecoration: 'underline',
      },
    },
  },
  'align=center': {
    alignItems: 'center',
  },
})

const Link = ({ children, href, target, align, onClick }) => (
  <a
    href={href}
    target={target}
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
  href: PropTypes.string,
  onClick: PropTypes.func,
  align: PropTypes.string,
}

export default Link
