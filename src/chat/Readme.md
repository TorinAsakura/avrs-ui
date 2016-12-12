Chat
====

## Messages

```
import React, { Component } from 'react'
import Messages from './Messages'

const messages = [{
  body: 'Таким образом рамки и место обучения кадров представляет собой интересный эксперимент! =)',
  direction: 'outgoing',
  createdAt: '12 Декабря, 16:37',
}, {
  body: 'Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание направлений прогрессивного развития. С другой стороны ...',
  direction: 'incoming',
  createdAt: '13 Декабря, 14:00',
}]

const MessagesExample = () => (
  <div style={{ margin: '20px' }}>
    <Messages messages={messages} />
  </div>
)

export default MessagesExample
```

## Reply

```
import React, { Component } from 'react'
import Reply from './Reply'

const ReplyExample = () => (
  <div style={{ margin: '20px' }}>
    <Reply
      placeholder='Новое сообщение ...'
    />
  </div>
)

export default ReplyExample
```