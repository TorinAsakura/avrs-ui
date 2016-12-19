import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    color: 'rgba(0, 0, 0, 0.9)',
    fontWeight: 300,
    fontSize: '24px',
    fontFamily: '"Ubuntu", "Helvetica Neue", Helvetica, sans-serif',
  },
})

const formatValue = (value = 0) => Number(value * 100).toFixed()

const Value = ({ children, x, y }) => (
  <text
    x={x}
    y={y + 8}
    textAnchor='middle'
    className={styles()}
  >
    {formatValue(children)}%
  </text>
)

export default Value
