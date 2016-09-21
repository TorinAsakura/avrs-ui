import React from 'react'
import DayPicker from 'react-day-picker'
import { StyleSheet } from 'elementum'
import 'react-day-picker/lib/style.css'

const styles = StyleSheet.create({
  self: {
    background: '#ffffff',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.07)',
  },
})

const Calendar = props => (
  <div className={styles()}>
    <DayPicker
      numberOfMonths={2}
      {...props}
    />
  </div>
)

export default Calendar
