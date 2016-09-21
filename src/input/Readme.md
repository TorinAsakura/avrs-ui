Поле ввода
==========

### Placeholder

```
import React, { Component } from 'react'
import { Input } from './index'

const PlaceholderExample = () => (
  <div style={{ margin: '20px' }}>
    <Input
      placeholder='Placeholder'
    />
  </div>
)

export default PlaceholderExample
```
### Disabled

```
import React, { Component } from 'react'
import { Input } from './index'

const DisabledExample = () => (
  <div style={{ margin: '20px' }}>
    <Input disabled />
  </div>
)

export default DisabledExample
```
