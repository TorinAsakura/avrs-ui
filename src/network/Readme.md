Network
=======


```
import React, { Component } from 'react'
import Network from './Network'

const data = {
  'name': 'Top Level',
  'children': [
    {
      'name': 'Level 2: A',
      'children': [
        {
          'name': 'Son of A',
        },
        {
          'name': 'Daughter of A',
        }
      ]
    },
    {
      'name': 'Level 2: B',
    }
  ]
}

class NetworkExample extends Component {
  render() {
    return (
      <div>
        <Network data={data} />
      </div>
    )
  }
}

export default NetworkExample
```
