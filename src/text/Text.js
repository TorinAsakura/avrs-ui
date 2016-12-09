/* eslint-disable global-require */
import React, { PropTypes } from 'react'
import { StyleSheet } from 'elementum'
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment'

if (canUseDOM) {
  require('google-fonts').add({ Ubuntu: [300, 400, 500, 700, '&subset=cyrillic'] })
}

const styles = StyleSheet.create({
  self: {
    display: 'inline-flex',
    fontFamily: '"Ubuntu", sans-serif',
    fontWeight: 400,
    lineHeight: 1.2,
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
  'color=blue700': {
    color: '#0665af',
  },
  'color=gray200': {
    color: '#aeb7be',
  },
  'color=gray250': {
    color: '#657684',
  },
  'color=gray300': {
    color: '#757575',
  },
  'color=gray400': {
    color: '#505458',
  },
  'color=black400': {
    color: '#303336',
  },
  'color=red400': {
    color: '#ff0000',
  },
  'color=orange500': {
    color: '#ff6701',
  },
  'color=green500': {
    color: '#00bb27',
  },
  'color=white': {
    color: '#ffffff',
  },
  'weight=light': {
    fontWeight: 300,
  },
  'weight=medium': {
    fontWeight: 500,
  },
  'weight=bold': {
    fontWeight: 700,
  },
  'align=center': {
    textAlign: 'center',
  },
  'lineHeight=extended': {
    lineHeight: 1.4,
  },
  'lineHeight=large': {
    lineHeight: 1.5,
  },
})

const Text = ({ id, children, size = 'normal', color, weight, align, lineHeight }) => (
  <span
    id={id}
    className={styles({ size, color, weight, align, lineHeight })}
  >
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
