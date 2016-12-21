/* eslint-disable react/no-did-mount-set-state */
import React, { Component } from 'react'
import * as d3Scale from 'd3-scale'
import * as d3Shape from 'd3-shape'
import * as d3Ease from 'd3-ease'
import * as d3Selection from 'd3-selection'
import Line from './Line'
import Dots from './Dots'
import YAxis from './YAxis'

class LineLiveChart extends Component {
  static defaultProps = {
    width: 700,
    height: 400,
    maxCount: 7,
    min: 300,
    max: 1200,
  }

  constructor(props, context) {
    super(props, context)

    const { maxCount, min, max } = props

    const data = props.value ? [props.value] : []

    const xScale = d3Scale.scaleLinear().domain([0, maxCount - 2])
    const yScale = d3Scale.scaleLinear().domain([min, max])

    const line = d3Shape.line()
                        .curve(d3Shape.curveCatmullRom)
                        .x((d, i) => xScale(i))
                        .y(d => yScale(d))

    this.line = line

    this.state = {
      data,
      xScale,
      yScale,
    }
  }

  componentDidMount() {
    const { width, height, lineOffset, ...sizes } = this.calculateSizes(this.props.width, this.props.height)
    const { xScale, yScale } = this.state

    xScale.range([0, width - (lineOffset * 2)])
    yScale.range([height, 0])

    this.setState({
      width, height, lineOffset, ...sizes,
    })

    if (this.element) {
      this.move(this.state.data)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      const { maxCount } = this.props
      const { data } = this.state

      if (data.length > maxCount * 2) {
        const clearDdata = data.slice(data.length - maxCount, data.length)
        this.move(clearDdata, false)

        this.setState({ data: clearDdata }, () => {
          const newData = clearDdata.concat([nextProps.value])
          this.setState({ data: newData })
          this.move(newData)
        })
      } else {
        const newData = data.concat([nextProps.value])
        this.setState({ data: newData })
        this.move(data)
      }
    }

    if (nextProps.width !== this.props.width || nextProps.height !== this.props.height) {
      const { width, height, lineOffset, ...sizes } = this.calculateSizes(nextProps.width, nextProps.height)
      const { xScale, yScale } = this.state

      xScale.range([0, width - (lineOffset * 2)])
      yScale.range([height, 0])

      this.setState({
        width, height, lineOffset, ...sizes,
      })
    }
  }

  onSetRef = (element) => {
    this.element = d3Selection.select(element)
  }

  calculateSizes = (width, height) => {
    const margin = {
      top: 10,
      bottom: 10,
      left: 36,
    }

    return {
      boxWidth: width,
      boxHeight: height,
      height: height - (margin.top + margin.bottom),
      width: width - margin.left,
      margin,
      lineOffset: 12,
    }
  }

  move = (data, animate = true) => {
    const { maxCount } = this.props
    const { xScale } = this.state

    let position = 0

    if (data.length > (maxCount - 2)) {
      position = data.length - (maxCount - 2)
    }

    if (animate) {
      this.element
          .transition()
          .duration(500)
          .ease(d3Ease.easeLinear)
          .attr('transform', `translate(-${xScale(position)},0)`)
    } else {
      this.element
          .attr('transform', `translate(-${xScale(position)},0)`)
    }
  }

  render() {
    const { data, width, height, boxWidth, boxHeight, margin, lineOffset, xScale, yScale } = this.state

    if (!(width > 0 && height > 0)) {
      return null
    }

    return (
      <svg
        width={boxWidth}
        height={boxHeight}
      >
        <defs>
          <clipPath id='clip'>
            <rect
              width={width}
              height={height}
            />
          </clipPath>
          <filter id='lines-shadow' x='0' y='0' width='200%' height='200%'>
            <feGaussianBlur in='SourceAlpha' stdDeviation='4' />
            <feOffset dx='2' dy='14' />
            <feComponentTransfer>
              <feFuncA type='linear' slope='0.5' />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <g transform={`translate(${width - 1}, 0)`}>
            <line
              stroke='#f2f2f2'
              x1={0.5}
              x2={0.5}
              y2={height}
            />
          </g>
          <YAxis
            width={width}
            yScale={yScale}
          />
          <g clipPath='url(#clip)'>
            <g ref={this.onSetRef}>
              <g transform={`translate(${lineOffset}, 0)`}>
                <Line
                  width={width}
                  height={height}
                  data={data}
                  xScale={xScale}
                  yScale={yScale}
                />
                <Dots
                  width={width}
                  height={height}
                  data={data}
                  xScale={xScale}
                  yScale={yScale}
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    )
  }
}

export default LineLiveChart
