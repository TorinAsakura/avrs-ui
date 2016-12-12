import React from 'react'
import { Row, Layout } from 'flex-layouts'
import Message from './Message'

const Messages = ({ messages = [] }) => (
  <Row>
    {messages.map((message, index) => (
      <Layout key={index}>
        <Message {...message} />
      </Layout>
    ))}
  </Row>
)

export default Messages
