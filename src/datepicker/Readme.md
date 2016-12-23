DatePicker
=======

### DatePicker

```
import React, { Component } from 'react'
import DatePicker from './DatePicker'

class DatePickerExample extends Component {
  state = {
    selected: null,
  }

  onChange = selected => {
    this.setState({ selected })
  }

  render() {
    const { selected } = this.state

    return (
      <div style={{ padding: '20px 20px 300px 20px' }}>
        <DatePicker
          value={selected}
          onChange={this.onChange}
        />
      </div>
    )
  }

}

export default DatePickerExample
```

### DateRange

```
import React, { Component } from 'react'
import DateRange from './DateRange'

class DateRangeExample extends Component {
  state = {
    selected: {
      from: null,
      to: null,
    },
  }

  onChange = selected => {
    this.setState({ selected })
  }

  render() {
    const { selected } = this.state

    return (
      <div style={{ padding: '20px 20px 300px 20px' }}>
        <DateRange
          value={selected}
          onChange={this.onChange}
        />
      </div>
    )
  }

}

export default DateRangeExample
```
