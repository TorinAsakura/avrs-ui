import React, { PropTypes } from 'react'
import { StyleSheet } from 'elementum'
import moment from 'moment'

const styles = StyleSheet.create({
  self: {
    fontSize: '14px',
    fontFamily: 'Ubuntu',
    marginBottom: '6px',
    display: 'flex',
  },
})

const Day = ({ children }) => (
  <div className={styles()}>
    {moment(children, 'ddd').format('dddd')}
  </div>
)

Day.propTypes = {
  children: PropTypes.string,
}

export default Day
