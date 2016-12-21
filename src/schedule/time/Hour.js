import React, { PropTypes } from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    fontSize: '12px',
    fontWeight: 400,
    fontFamily: 'Ubuntu',
    width: '100%',
    borderBottom: '1px solid #f2f2f2',
    borderLeft: '1px solid #f2f2f2',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  empty: {
    borderLeftWidth: '0px',
  },
})

const Hour = ({ children, empty }) => (
  <div className={styles({ empty })}>
    {children}
  </div>
)

Hour.propTypes = {
  children: PropTypes.string,
}

export default Hour
