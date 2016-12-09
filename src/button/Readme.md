Кнопка
======

### Состояние

*По умолчанию*

```
import React, { Component } from 'react'
import Button from './Button'
import GhostButton from './GhostButton'

const ButtonExample = () => (
  <div style={{ margin: '20px' }}>
    <div style={{ marginBottom: '10px' }}>
      <Button>
        Кнопка
      </Button>
    </div>
    <div style={{ padding: '10px', background: '#1C5D98' }}>
      <GhostButton color='white' rounded>
        Кнопка
      </GhostButton>
    </div>
  </div>
)

export default ButtonExample
```
