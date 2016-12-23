import React, { Component } from 'react'
import * as d3Selection from 'd3-selection'
import * as d3Scale from 'd3-scale'
import * as d3Array from 'd3-array'
import Lines from './Lines'
import Dots from './Dots'
import Pointer from './Pointer'
import YAxis from './YAxis'
import XAxis from './XAxis'
import Brush from './Brush'
import Zoom from './Zoom'

class ComplexLineChart extends Component {
  static defaultProps = {
    brushHeight: 60,
    axisHeight: 30,
    width: 700,
    height: 400,
  }

  constructor(props, context) {
    super(props, context)

    const { height, axisHeight, brushHeight, width, data } = props

    const linesHeight = height - axisHeight - brushHeight
    const brushOffset = axisHeight + linesHeight

    const start = d3Array.min(props.data[0].values, d => d.date)
    const end = d3Array.max(props.data[0].values, d => d.date)

    const xScale = d3Scale.scaleTime().domain([start, end]).rangeRound([10, width - 20])
    const yScale = d3Scale.scaleLinear().rangeRound([linesHeight, 0])
    const zScale = d3Scale.scaleOrdinal(d3Scale.schemeCategory10)

    xScale.domain(d3Array.extent(data[0].values, d => d.date))

    yScale.domain([
      d3Array.min(props.data, (c) => {
        const min = d3Array.min(c.values, d => d.amount)
        return min - (Math.round((min * 0.2) * 100) / 100)
      }),
      d3Array.max(props.data, (c) => {
        const max = d3Array.max(c.values, d => d.amount)
        return max + (Math.round((max * 0.1) * 100) / 100)
      }),
    ])

    zScale.domain(props.data.map(c => c.id))

    const xBrushScale = d3Scale.scaleTime().domain([start, end]).rangeRound([0, width])
    const yBrushScale = d3Scale.scaleLinear().rangeRound([brushHeight, 0])
    const zBrushScale = d3Scale.scaleOrdinal(d3Scale.schemeCategory10)

    xBrushScale.domain(xScale.domain())
    yBrushScale.domain(yScale.domain())
    zBrushScale.domain(zScale.domain())

    this.state = {
      xScale,
      yScale,
      zScale,
      xBrushScale,
      yBrushScale,
      zBrushScale,
      width,
      height,
      linesHeight,
      brushOffset,
      brushHeight,
    }
  }

  onBrushed = () => {
    const { sourceEvent, selection } = d3Selection.event
    const { xScale, xBrushScale } = this.state

    if (sourceEvent && sourceEvent.type === 'zoom') {
      return
    }

    xScale.domain(selection.map(xBrushScale.invert, xBrushScale))

    this.forceUpdate()
  }

  onZoomed = () => {
    const { sourceEvent, transform } = d3Selection.event
    const { xScale, xBrushScale } = this.state

    if (sourceEvent && sourceEvent.type === 'brush') {
      return
    }

    xScale.domain(transform.rescaleX(xBrushScale).domain())

    this.brush.move(xScale.range().map(transform.invertX, transform))

    this.forceUpdate()
  }

  onMouseOver = () => {
    this.pointer.show()
  }

  onMouseOut = () => {
    this.pointer.hide()
  }

  onMouseMove = (event) => {
    this.pointer.move(event)
  }

  onSetRef = (element) => {
    this.element = element
  }

  onSetBrush = (element) => {
    this.brush = element
  }

  onSetPointer = (element) => {
    this.pointer = element
  }

  render() {
    const { data } = this.props
    const { width, height, linesHeight, brushHeight, brushOffset } = this.state
    const { xScale, yScale, zScale, xBrushScale, yBrushScale, zBrushScale } = this.state

    if (!(width > 0 && height > 0)) {
      return null
    }

    return (
      <svg
        width={width}
        height={height}
      >
        <YAxis
          width={width}
          yScale={yScale}
        />
        <XAxis
          height={linesHeight}
          xScale={xScale}
        />
        <Lines
          axis={false}
          showDots={false}
          showPointer={false}
          width={width}
          height={linesHeight}
          data={data}
          xScale={xScale}
          yScale={yScale}
          zScale={zScale}
        />
        <Dots
          data={data}
          xScale={xScale}
          yScale={yScale}
          zScale={zScale}
        />
        <Pointer
          data={data}
          width={width}
          height={linesHeight}
          xScale={xScale}
          yScale={yScale}
          zScale={zScale}
          ref={this.onSetPointer}
        />
        <Brush
          width={width}
          height={brushHeight}
          offset={brushOffset}
          xScale={xBrushScale}
          yScale={yBrushScale}
          zScale={zBrushScale}
          onBrushed={this.onBrushed}
          ref={this.onSetBrush}
        >
          <Lines
            width={width}
            height={brushHeight}
            data={data}
            xScale={xBrushScale}
            yScale={yBrushScale}
            zScale={zBrushScale}
          />
        </Brush>
        <Zoom
          width={width}
          height={linesHeight}
          onZoomed={this.onZoomed}
          onMouseMove={this.onMouseMove}
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
        />
      </svg>
    )
  }
}

export default ComplexLineChart
