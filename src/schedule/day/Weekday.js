import React, { PropTypes } from 'react'
import { StyleSheet } from 'elementum'
import moment from 'moment'

const styles = StyleSheet.create({
  self: {
    fontWeight: 300,
    fontSize: '14px',
    fontFamily: 'Ubuntu',
    display: 'flex',
    height: '100%',
    width: '100%',
    borderBottom: '1px solid #f2f2f2',
    alignItems: 'center',
    justifyContent: 'flex-end',
    boxSizing: 'border-box',
    paddingRight: '10px',
  },
})

const Weekday = ({ children }) => (
  <div className={styles()}>
    {moment(moment().locale('en').day(children).valueOf()).format('dddd')}
  </div>
)

Weekday.propTypes = {
  children: PropTypes.string,
}

export default Weekday
