import React, { PropTypes } from 'react'
import { StyleSheet } from 'elementum'
import fonts from 'google-fonts'

fonts.add({ Ubuntu: [300, 400, 500, '&subset=cyrillic'] })

const styles = StyleSheet.create({
  self: {
    display: 'inline-flex',
    fontFamily: '"Ubuntu",sans-serif',
    fontWeight: 400,
    lineHeight: 1.1,
    color: '#000000',
  },
  'size=xxlarge': {
    fontSize: '36px',
  },
  'size=xlarge': {
    fontSize: '30px',
  },
  'size=large': {
    fontSize: '24px',
  },
  'size=medium': {
    fontSize: '18px',
  },
  'size=normal': {
    fontSize: '16px',
  },
  'size=small': {
    fontSize: '14px',
  },
  'size=xsmall': {
    fontSize: '12px',
  },
  'color=blue400': {
    color: '#0288d1',
  },
  'color=gray300': {
    color: '#757575',
  },
  'color=red400': {
    color: '#ff0000',
  },
  'weight=light': {
    fontWeight: 300,
  },
  'weight=bold': {
    fontWeight: 500,
  },
})

const Text = ({ children, size = 'normal', color, weight }) => (
  <span className={styles({ size, color, weight })}>
    {children}
  </span>
)

Text.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf([
    'xxlarge',
    'xlarge',
    'large',
    'medium',
    'normal',
    'small',
    'xsmall',
  ]),
  color: PropTypes.string,
  weight: PropTypes.string,
}

export default Text
