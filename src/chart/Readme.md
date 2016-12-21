Chart
=====

## Live pie

```
import React, { Component } from 'react'
import * as d3Random from 'd3-random'
import PieLiveChart from './PieLiveChart/PieLiveChart'

const random = d3Random.randomUniform(10, 80)

class PieLiveChartExample extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      value: random() / 100,
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.onAddData, 2000)
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  onAddData = () => {
    this.setState({ value: random() / 100 })
  }

  render() {
    const { value } = this.state

    return (
      <div>
        <PieLiveChart
          width={200}
          height={200}
          value={value}
        />
      </div>
    )
  }
}

export default PieLiveChartExample
```

## Live line

```
import React, { Component } from 'react'
import moment from 'moment'
import * as d3Random from 'd3-random'
import AutoSizer from '../content/AutoSizer'
import LineLiveChart from './LineLiveChart/LineLiveChart'

const random = d3Random.randomUniform(800, 1100)

class LineLiveChartExample extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      value: random(),
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.onAddData, 2000)
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  onAddData = () => {
    this.setState({ value: random() })
  }

  render() {
    const { value } = this.state

    return (
      <div style={{ width: '100%' }}>
        <div style={{ height: 400 }}>
          <AutoSizer>
            <LineLiveChart
              value={value}
            />
          </AutoSizer>
        </div>
      </div>
    )
  }
}

export default LineLiveChartExample
```

## Complex lines

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
