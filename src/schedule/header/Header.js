import React, { PropTypes } from 'react'
import { ColumnLayout, Layout } from 'flex-layouts'
import Day from './Day'

const Header = ({ days = [] }) => (
  <ColumnLayout>
    <Layout basis='60px' />
    {days.map(day => (
      <Layout key={day} basis='15%' shrink={1} justify='center'>
        <Day>
          {day}
        </Day>
      </Layout>
    ))}
  </ColumnLayout>
)

Header.propTypes = {
  days: PropTypes.arrayOf(PropTypes.string),
}

export default Header
