Расписание
=======

```
import React, { Component } from 'react'
import Schedule from './Schedule'

class ScheduleExample extends Component {
  state = {
    values: [{
      color: '#0288D1',
      active: false,
      values: {
        mon: ['01:00', '02:00'],
      },
    },{
      color: '#00BB27',
      active: true,
      values: {
        mon: ['03:00', '04:00'],
      },
    }],
  }

  onChange = (values) => {
    this.setState({ values })
  }

  render() {
    const { values } = this.state

    return (
      <div style={{ margin: '20px' }}>
        <Schedule
          width={700}
          height={400}
          values={values}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

export default ScheduleExample
```
