import React, { PropTypes } from 'react'
import { ColumnLayout, RowLayout, Layout } from 'flex-layouts'
import Day from './day/Day'
import Time from './time/Time'
import Header from './header/Header'

const defaultValue = {
  mon: [],
  tue: [],
  wed: [],
  thu: [],
  fri: [],
  sut: [],
  sun: [],
}

const Schedule = ({ value = defaultValue, onChange = f => f }) => (
  <RowLayout>
    <Layout>
      <Header days={Object.keys(value)} />
    </Layout>
    <Layout>
      <ColumnLayout>
        <Layout basis='60px'>
          <Time />
        </Layout>
        {Object.keys(value).map((day, index) => (
          <Layout key={day} basis='15%' shrink={1}>
            <Day
              values={value[day]}
              firstDay={index === 0}
              onChange={hours => onChange({ ...value, [day]: hours })}
            />
          </Layout>
        ))}
      </ColumnLayout>
    </Layout>
  </RowLayout>
)

Schedule.propTypes = {
  value: PropTypes.shape({
    mon: PropTypes.arrayOf(PropTypes.string),
    tue: PropTypes.arrayOf(PropTypes.string),
    wed: PropTypes.arrayOf(PropTypes.string),
    thu: PropTypes.arrayOf(PropTypes.string),
    fri: PropTypes.arrayOf(PropTypes.string),
    sut: PropTypes.arrayOf(PropTypes.string),
    sun: PropTypes.arrayOf(PropTypes.string),
  }),
  onChange: PropTypes.func,
}

export default Schedule
