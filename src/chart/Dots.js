import React, { Component } from 'react'
import d3Selection from 'd3-selection'
import { isDomainEquals } from './utils'

class Dots extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      xDomain: props.xScale.domain(),
      yDomain: props.yScale.domain(),
    }
  }

  componentDidMount() {
    this.redraw()
  }

  componentWillReceiveProps(nextProps) {
    if (!isDomainEquals(nextProps.xScale.domain(), this.state.xDomain)) {
      this.setState({ xDomain: nextProps.xScale.domain() })
      this.redraw()
    }
  }

  onSetRef = (element) => {
    this.element = d3Selection.select(element)
  }

  redraw() {
    const { xScale, yScale, data } = this.props

    const values = data.reduce((result, item) =>
      result.concat(item.values.map(value => ({ ...value, stroke: item.stroke })))
    , [])

    const circle = this.element.selectAll('circle').data(values)

    circle
      .enter()
      .append('circle')
      .attr('cx', d => xScale(d.date))
      .attr('cy', d => yScale(d.amount))
      .attr('style', d => `fill:white; stroke:${d.stroke};`)
      .attr('r', 3)

    circle
      .attr('cx', d => xScale(d.date))
      .attr('cy', d => yScale(d.amount))

    circle.exit().remove()
  }

  render() {
    return (
      <g ref={this.onSetRef} />
    )
  }
}

export default Dots
