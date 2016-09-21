Кнопка
======

### Состояние

*По умолчанию*

```
import React, { Component } from 'react'
import Button from './Button'

const ButtonExample = () => (
  <div style={{ margin: '20px' }}>
    <Button>
      Кнопка
    </Button>
  </div>
)

export default ButtonExample
```

&nbsp;

### Описание

*Свойства*

> **disabled** : *Boolean* Отключает действия на кнопке


*События*

> **onClick**(*callback*: Function<event>) Вызывается по нажатию
