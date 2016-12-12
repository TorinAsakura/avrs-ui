import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    fontSize: '12px',
    color: '#657584',
    fontFamily: '"Ubuntu", sans-serif',
    fontWeight: 400,
    lineHeight: 1.2,
    margin: '4px 8px 0 8px',
  },
})

const CreateAt = ({ children }) => (
  <div className={styles()}>
    {children}
  </div>
)

export default CreateAt
