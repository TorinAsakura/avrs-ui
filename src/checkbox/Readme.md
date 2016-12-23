Checkbox
========

### Checkbox

```
import React, { Component } from 'react'
import Checkbox from './Checkbox'

class CheckboxExample extends Component {
  state = {
    checked: true
  }

  onChange = checked => {
    this.setState({ checked })
  }

  render() {
    const { checked } = this.state

    return (
      <div style={{ padding: '20px' }}>
        <Checkbox
          value={checked}
          onChange={this.onChange}
        />
      </div>
    )
  }

}

export default CheckboxExample
```
