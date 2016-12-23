Steps
=====

```
import React, { Component } from 'react'
import Steps from './Steps'
import Step from './Step'

class StepsExample extends Component {
  render() {
    return (
      <div style={{ height: 400, width: '100%' }}>
        <Steps current={1}>
          <Step title='Способ вывода'>
            <div>
              Step 1
            </div>
          </Step>
          <Step title='Информация'>
            <div>
              Step 2
            </div>
          </Step>
          <Step title='Подтверждение'>
            <div>
              Step 3
            </div>
          </Step>
        </Steps>
      </div>
    )
  }
}

export default StepsExample
```
