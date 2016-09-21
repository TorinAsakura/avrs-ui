import React, { PropTypes } from 'react'
import moment from 'moment'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    display: 'inline-flex',
  },
})

const Label = ({ children, placeholder, format }) => (
  <div className={styles()}>
    {children ? moment(children).format(format) : placeholder}
  </div>
)

Label.propTypes = {
  children: PropTypes.instanceOf(Date),
  placeholder: PropTypes.string,
  format: PropTypes.string,
}

export default Label
