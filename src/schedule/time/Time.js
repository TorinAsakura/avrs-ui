import React from 'react'
import moment from 'moment'
import { Column, Layout } from 'flex-layouts'
import Hour from './Hour'

const getHours = () => {
  const start = moment().startOf('day').subtract(2, 'hour')

  return Array.from(Array(12).keys()).map(() => start.add(2, 'hour').format('HH:mm'))
}

const Time = ({ weekdayWidth, dayWidth }) => (
  <Column>
    <Layout basis={`${weekdayWidth}px`}>
      <Hour empty />
    </Layout>
    {getHours().map((hour, index) => (
      <Layout key={index} basis={`${dayWidth * 2}px`}>
        <Hour>
          {hour}
        </Hour>
      </Layout>
    ))}
  </Column>
)

export default Time
