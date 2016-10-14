import React, { Component } from 'react'
import d3Selection from 'd3-selection'
import d3Brush from 'd3-brush'

class Brush extends Component {
  componentDidMount() {
    const { width, height, domain, xScale, onBrushed } = this.props

    const element = this.element

    const brush = this.brush = d3Brush.brushX()
                         .extent([[0, 0], [width, height]])
                         .on('brush end', onBrushed)

    const start = domain[0] ? xScale(domain[0]) : 0
    const end = domain[1] ? xScale(domain[1]) : width

    element.call(brush)
           .call(brush.move, [start, end])
  }

  onSetRef = (element) => {
    this.element = d3Selection.select(element)
  }

  move = (i) => {
    this.element.call(this.brush.move, i)
  }

  render() {
    const { children, offset, width } = this.props

    return (
      <g transform={`translate(0, ${offset})`}>
        <line
          x1={0}
          y1={0}
          x2={width}
          y2={0}
          style={{
            stroke: '#E5E5E5',
            strokeWidth: 1,
          }}
        />
        {children}
        <g ref={this.onSetRef} />
      </g>
    )
  }
}

export default Brush
