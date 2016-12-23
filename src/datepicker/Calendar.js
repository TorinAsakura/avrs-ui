import React from 'react'
import DayPicker from 'react-day-picker'
import { StyleSheet } from 'elementum'
import 'react-day-picker/lib/style.css'

const styles = StyleSheet.create({
  self: {
    background: '#ffffff',
    border: '1px solid #e5e5e5',
    borderRadius: '3px',
    marginTop: '1px',
  },
})

const Calendar = props => (
  <div className={styles()}>
    <DayPicker
      {...props}
    />
  </div>
)

export default Calendar
