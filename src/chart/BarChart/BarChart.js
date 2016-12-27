import React, { Component } from 'react'
import * as d3Selection from 'd3-selection'
import * as d3Scale from 'd3-scale'
import * as d3Array from 'd3-array'
import XAxis from './XAxis'
import YAxis from '../YAxis'

class BarChart extends Component {
  static defaultProps = {
    brushHeight: 60,
    axisHeight: 30,
    width: 700,
    height: 400,
  }

  constructor(props, context) {
    super(props, context)

    const { height, axisHeight, width, data } = props

    const barHeight = height - axisHeight

    const yScale = d3Scale.scaleLinear().rangeRound([barHeight, 0])
    const xScale = d3Scale.scaleBand().rangeRound([0, width]).paddingInner(0.1)

    xScale.domain(data.map(({ date }) => date))

    this.state = {
      xScale,
      yScale,
      width,
      height,
      barHeight,
    }
  }

  componentDidMount() {
    this.redraw(this.props.data)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.redraw(nextProps.data)
    }
  }

  onSetRef = (element) => {
    this.element = d3Selection.select(element)
  }

  redraw = (data) => {
    const { xScale, yScale, barHeight } = this.state

    xScale.domain(data.map(({ date }) => date))
    yScale.domain([0, d3Array.max(data.map(({ value }) => value))]).nice()

    const rect = this.element
                     .selectAll('rect')
                     .remove()
                     .exit()
                     .data(data)

    rect
      .enter().append('rect')
        .attr('x', d => xScale(d.date))
        .attr('y', d => yScale(d.value))
        .attr('width', xScale.bandwidth())
        .attr('height', d => barHeight - yScale(d.value))
        .attr('fill', d => d.color)

    this.setState({
      xScale,
      yScale,
    })
  }

  render() {
    const { data } = this.props
    const { width, height, barHeight, xScale, yScale } = this.state

    if (!(width > 0 && height > 0)) {
      return null
    }

    return (
      <svg
        width={width}
        height={height}
      >
        <line
          stroke='#f2f2f2'
          x1={0.5}
          x2={0.5}
          y2={barHeight}
        />
        <line
          stroke='#f2f2f2'
          x1={width}
          x2={width}
          y2={barHeight}
        />
        <YAxis
          width={width}
          yScale={yScale}
        />
        <XAxis
          height={barHeight}
          xScale={xScale}
          data={data}
        />
        <g ref={this.onSetRef} />
      </svg>
    )
  }
}

export default BarChart
