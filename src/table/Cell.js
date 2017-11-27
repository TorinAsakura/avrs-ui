import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    border: '1px solid #E5E5E5',
    verticalAlign: 'middle',
    padding: '12px 0.8rem',
    boxSizing: 'border-box',
    fontSize: '14px',
    color: '#505458',
    fontFamily: '"Ubuntu", sans-serif',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  hideLeftBorder: {
    borderLeftColor: 'transparent',
  },
  hideRightBorder: {
    borderRightColor: 'transparent',
  },
  'offset=small': {
    paddingTop: '4px',
    paddingBottom: '4px',
  },
  'align=center': {
    textAlign: 'center',
  },
  'align=right': {
    textAlign: 'right',
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
  'color=black400': {
    color: '#303336',
  },
  selected: {
    position: 'relative',
    color: '#0288D1',
    '&::before': {
      position: 'absolute',
      background: 'rgba(2, 136, 209, 0.1)',
      content: '" "',
      height: '10000px',
      left: '0px',
      top: '-5000px',
      width: '100%',
      cursor: 'pointer',
      zIndex: 99,
    },
  },
  selectable: {
    position: 'relative',
    overflow: 'visible',
    '&:hover::after': {
      position: 'absolute',
      background: 'rgba(2, 136, 209, 0.03)',
      content: '" "',
      height: '10000px',
      left: '0px',
      top: '-5000px',
      width: '100%',
      cursor: 'pointer',
      zIndex: 99,
    },
  },
})

const Cell = ({
  children, align, weight, offset, color, hideLeftBorder,
  hideRightBorder, selectable, selected, onClick,
}) => (
  <td
    onClick={onClick}
    className={styles({ align, weight, offset, color, hideLeftBorder, hideRightBorder, selectable, selected })}
  >
    {children}
  </td>
)

export default Cell
