import React, { Component } from 'react'
import * as d3Selection from 'd3-selection'
import * as d3Shape from 'd3-shape'
import { isDomainEquals } from './utils'

class Lines extends Component {
  static defaultProps = {
    stroke: '#00BB27',
  }

  constructor(props, context) {
    super(props, context)

    this.state = {
      xDomain: props.xScale.domain(),
      yDomain: props.yScale.domain(),
      zDomain: props.zScale.domain(),
    }
  }

  componentDidMount() {
    const { data } = this.props
    const { xScale, yScale, zScale } = this.props

    const element = this.element

    const line = d3Shape.line()
                        .curve(d3Shape.curveMonotoneX)
                        .x(d => xScale(d.date))
                        .y(d => yScale(d.amount))

    this.line = line

    const lines = element
      .append('g')
      .selectAll('path')
      .data(data)
      .enter()

    lines
      .append('path')
      .attr('d', d => line(d.values))
      .style('stroke', d => d.stroke || zScale(d.id))
      .attr('class', 'line')
  }

  componentWillReceiveProps(nextProps) {
    if (!isDomainEquals(nextProps.xScale.domain(), this.state.xDomain)) {
      this.setState({ xDomain: nextProps.xScale.domain() })
      this.updatePaths()
    }
  }

  onSetRef = (element) => {
    this.element = d3Selection.select(element)
  }

  getStyle() {
    const { stroke } = this.props

    return {
      strokeWidth: '1px',
      fill: 'none',
      stroke,
    }
  }

  updatePaths = () => {
    const line = this.line

    this.element.selectAll('path.line').attr('d', data => line(data.values))
  }

  render() {
    return (
      <g
        ref={this.onSetRef}
        style={this.getStyle()}
      />
    )
  }
}

export default Lines
