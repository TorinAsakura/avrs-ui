Notification
============

```
import React, { Component } from 'react'
import Notification from './Notification'

class NotificationExample extends Component {
  state = {
    messages: [],
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ messages: [{ key: '1', message: 'some' }] })
    }, 1000)

    setTimeout(() => {
      this.setState({ messages: this.state.messages.concat([{ key: '2', message: 'some some' }]) })
    }, 3000)
  }

  onDismiss = (key) => {
    const { messages } = this.state

    this.setState({ messages: messages.filter(message => message.key !== key) })
  }

  render() {
    const { messages } = this.state

    return (
      <div style={{ padding: '20px 0 200px 0' }}>
        <Notification
          messages={messages}
          onDismiss={this.onDismiss}
        />
      </div>
    )
  }
}

export default NotificationExample
```
