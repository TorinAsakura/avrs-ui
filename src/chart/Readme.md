Chart
=====


```
import React, { Component } from 'react'
import moment from 'moment'
import LineChart from './ComplexLineChart'

const generateData = () => {
  return ['rent', 'referal'].map(id => ({
    id,
    values: Array.from(Array(30).keys()).map(day => ({
      date: moment().subtract(day, 'days').toDate(),
      amount: Math.round((Math.random() * 10) * 100) / 100
    })),
    stroke: id === 'rent' ? '#00BB27' : '#0288D1',
    title: id === 'rent' ? 'Аренда' : 'Сеть',
  }))
}

class LineChartExample extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      data: generateData(),
      brushDomain: [moment().subtract(7, 'days').toDate(), moment().toDate()],
    }
  }

  render() {
    const { data, brushDomain } = this.state

    return (
      <div>
        <LineChart
          data={data}
          brushDomain={brushDomain}
        />
      </div>
    )
  }
}

export default LineChartExample
```
