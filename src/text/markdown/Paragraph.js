import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    lineHeight: '1.5',
    fontWeight: 300,
    color: '#303336',
    fontSize: '16px',
    fontFamily: '"Ubuntu", sans-serif',
    paddingBottom: '20px',
    WebkitMarginBefore: '0px',
    WebkitMarginAfter: '0px',
  },
  hidden: {
    marginBottom: '0px',
  },
})

const Paragraph = ({ children, hidden }) => (
  <p className={styles({ hidden })}>
    {children}
  </p>
)

export default Paragraph
