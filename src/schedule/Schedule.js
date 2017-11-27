import React from 'react'
import moment from 'moment'
import { StyleSheet } from 'elementum'
import { Row, Layout } from 'flex-layouts'
import Day from './day/Day'
import Time from './time/Time'

const styles = StyleSheet.create({
  self: {
    boxSizing: 'border-box',
    border: '1px solid #f2f2f2',
  },
})

const indexToDay = index =>
  moment().startOf('isoweek')
          .add(index, 'day')
          .format('ddd')
          .toLowerCase()

const weekDays = Array.from(Array(7).keys()).map(indexToDay)

const defaultValues = [{
  values: weekDays.reduce((result, day) => ({ ...result, [day]: [] }), {}),
}]

const normalizeValues = values =>
  values.map((value) => {
    const missed = weekDays.reduce((result, day) => {
      if (!Array.isArray(value.values[day])) {
        return { ...result, [day]: [] }
      }

      return result
    }, {})

    return {
      ...value,
      values: {
        ...value.values,
        ...missed,
      },
    }
  })

const groupByDay = (values) => {
  const items = weekDays.reduce((result, day) => {
    const grouped = values.map(value => ({
      color: value.color,
      active: value.active,
      values: value.values[day],
    }))

    return {
      ...result,
      [day]: grouped,
    }
  }, {})

  return items
}

const calculateDayWith = (width, weekdayWidth) => (width - weekdayWidth) / 24

const calculateDayHeight = height => height / 8

const change = (values, day, hour, onChange) => {
  const res = values.reduce((result, value) => {
    const limit = value.limit || 10

    if (value.active) {
      if (value.values[day].includes(hour)) {
        return [...result, {
          ...value,
          values: {
            ...value.values,
            [day]: value.values[day].filter(item => item !== hour),
          },
        }]
      } else if (value.values[day].length < limit) {
        return [...result, {
          ...value,
          values: {
            ...value.values,
            [day]: value.values[day].concat([hour]),
          },
        }]
      }
    }

    return [...result, value]
  }, [])

  if (onChange) {
    onChange(res)
  }
}

const Schedule = ({ values = defaultValues, width, height, weekdayWidth = 140, onChange = f => f }) => (
  <div
    className={styles()}
    style={{ width, height }}
  >
    <Row>
      <Layout basis={`${calculateDayHeight(height)}px`}>
        <Time
          weekdayWidth={weekdayWidth}
          dayWidth={calculateDayWith(width, weekdayWidth)}
        />
      </Layout>
      {weekDays.map((day, index) => (
        <Layout
          key={index}
          basis={`${calculateDayHeight(height)}px`}
        >
          <Day
            day={day}
            weekdayWidth={weekdayWidth}
            dayWidth={calculateDayWith(width, weekdayWidth)}
            onChange={hour => change(normalizeValues(values), day, hour, onChange)}
            values={groupByDay(normalizeValues(values))[day]}
          />
        </Layout>
      ))}
    </Row>
  </div>
)

export default Schedule
