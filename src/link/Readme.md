Ссылка
======

```
import React, { Component } from 'react'
import { RouteLink } from './index'
import { Text } from '../text'

const RouteLinkExample = () => (
  <div style={{ margin: '20px' }}>
    <RouteLink to='/path'>
      <Text size='small'>
        Ссылка
      </Text>
    </RouteLink>
  </div>
)

export default RouteLinkExample
```
