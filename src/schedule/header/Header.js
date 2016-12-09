import React, { PropTypes } from 'react'
import { Column, Layout } from 'flex-layouts'
import Day from './Day'

const Header = ({ days = [] }) => (
  <Column>
    <Layout basis='60px' />
    {days.map(day => (
      <Layout key={day} basis='15%' shrink={1} justify='center'>
        <Day>
          {day}
        </Day>
      </Layout>
    ))}
  </Column>
)

Header.propTypes = {
  days: PropTypes.arrayOf(PropTypes.string),
}

export default Header
