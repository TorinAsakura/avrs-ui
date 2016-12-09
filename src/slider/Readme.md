Slider
========


```
import React, { Component } from 'react'
import Slider from './Slider'

class SliderExample extends Component {
  state = {
    value: 30,
  }

  onChange = (value) => {
    this.setState({ value })
  }

  render() {
    const { value } = this.state

    return (
      <div style={{ padding: 30, width: 300, boxSizing: 'border-box', }}>
        <Slider
          value={value}
          markers={[30, 90, 180, 365]}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

export default SliderExample
```
