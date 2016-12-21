import React, { Component } from 'react'
import * as d3Selection from 'd3-selection'

class Dots extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      xDomain: props.xScale.domain(),
      yDomain: props.yScale.domain(),
    }
  }

  componentDidMount() {
    this.redraw(this.props.data)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.redraw(nextProps.data)
    }

    if (nextProps.width !== this.props.width || nextProps.height !== this.props.height) {
      this.redraw(nextProps.data)
    }
  }

  onSetRef = (element) => {
    this.element = d3Selection.select(element)
  }

  redraw(data) {
    const { xScale, yScale } = this.props

    const circle = this.element.selectAll('circle').data(data)

    circle
      .enter()
      .append('circle')
      .attr('cx', (d, i) => xScale(i))
      .attr('cy', d => yScale(d))
      .attr('style', () => 'fill:white; stroke:#0288D1; stroke-width: 2px;')
      .attr('r', 5)
      .style('stroke-opacity', 0)

    circle
      .attr('cx', (d, i) => xScale(i))
      .attr('cy', d => yScale(d))

    circle.exit().remove()

    this.element.selectAll('circle')
      .transition()
      .duration(750)
      .style('stroke-opacity', 1)
  }

  render() {
    return (
      <g ref={this.onSetRef} />
    )
  }
}

export default Dots
