Locale
======

```
import React, { Component } from 'react'
import Locale from './Locale'

class LocaleExample extends Component {
  state = {
    current: 'ru',
  }

  onChange = (current) => {
    this.setState({ current })
  }

  render() {
    const { current } = this.state

    return (
      <div style={{ margin: '150px' }}>
        <Locale
          current={current}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

export default LocaleExample
```
