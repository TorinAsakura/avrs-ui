Select
======

### Select

```
import React, { Component } from 'react'
import Select from './Select'

class SelectExample extends Component {
  state = {
    selected: '',
    options: [{
      label: 'Male',
      value: 'male',
    }, {
      label: 'Female',
      value: 'female',
    }]
  }

  onChange = selected => {
    this.setState({ selected })
  }

  render() {
    const { selected, options } = this.state

    return (
      <div style={{ padding: '20px 20px 100px 20px' }}>
        <Select
          value={selected}
          options={options}
          onChange={this.onChange}
        />
      </div>
    )
  }

}

export default SelectExample
```
