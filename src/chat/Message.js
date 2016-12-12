import React from 'react'
import { StyleSheet } from 'elementum'
import Bubble from './bubble/Bubble'
import CreatedAt from './CreatedAt'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '8px',
    width: '100%',
    boxSizing: 'border-box',
  },
  'type=QUESTION': {
    alignItems: 'flex-start',
  },
  'type=ANSWER': {
    alignItems: 'flex-end',
  },
})

const Message = ({ type, body, createdAt }) => (
  <div className={styles({ type })}>
    <Bubble direction={type}>
      {body}
    </Bubble>
    <CreatedAt>
      {createdAt}
    </CreatedAt>
  </div>
)

export default Message
