import React from 'react'
import moment from 'moment'
import { RowLayout, Layout } from 'flex-layouts'
import Hour from './Hour'

const getHours = () => {
  const start = moment().startOf('day').subtract(1, 'hour')

  return Array.from(Array(24).keys()).map(() => start.add(1, 'hour').format('HH:mm'))
}

const Time = () => (
  <RowLayout>
    {getHours().map((hour, index) => (
      <Layout key={index}>
        <Hour>
          {hour}
        </Hour>
      </Layout>
    ))}
  </RowLayout>
)

export default Time
