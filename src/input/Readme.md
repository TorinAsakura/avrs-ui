Поле ввода
==========

### Phone

```
import React, { Component } from 'react'
import PhoneInput from './PhoneInput'

class PhoneExample extends Component {
  state = {
    value: '',
  }

  onChange = (value) => {
    this.setState({ value })
  }

  render() {
    const { value } = this.state

    return (
      <div style={{ margin: '20px' }}>
        <PhoneInput
          value={value}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

export default PhoneExample
```

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


