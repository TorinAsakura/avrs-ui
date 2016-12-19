import React, { Component } from 'react'
import * as d3Selection from 'd3-selection'
import * as d3Shape from 'd3-shape'
import Value from './Value'

class PieLiveChart extends Component {
  static defaultProps = {
    tau: 2 * Math.PI,
  }

  constructor(props, context) {
    super(props, context)

    this.state = {
      width: 0,
      height: 0,
    }

    this.arc = d3Shape.arc()
                      .innerRadius(props.width / 2)
                      .outerRadius((props.width / 2) - 5)
                      .startAngle(0)
  }

  componentDidMount() {
    const { value, tau } = this.props

    this.background
      .datum({ endAngle: tau })
      .style('fill', '#f2f2f2')
      .attr('d', this.arc)

    this.foreground
      .datum({ endAngle: value * tau })
      .style('fill', '#00BB27')
      .attr('d', this.arc)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.foreground.datum({ endAngle: nextProps.value * this.props.tau }).attr('d', this.arc)
    }

    if (nextProps.width !== this.props.width) {
      this.arc
          .innerRadius(nextProps.width / 2)
          .outerRadius((nextProps.width / 2) - 5)
    }
  }

  onSetForeground = (element) => {
    this.foreground = d3Selection.select(element)
  }

  onSetBackground = (element) => {
    this.background = d3Selection.select(element)
  }

  render() {
    const { value, width, height } = this.props

    if (!(width > 0 && height > 0)) {
      return null
    }

    return (
      <svg
        width={width}
        height={height}
      >
        <g transform={`translate(${width / 2},${height / 2}) rotate(180)`}>
          <path ref={this.onSetBackground} />
          <path ref={this.onSetForeground} />
        </g>
        <Value
          x={width / 2}
          y={height / 2}
        >
          {value}
        </Value>
      </svg>
    )
  }
}

export default PieLiveChart
