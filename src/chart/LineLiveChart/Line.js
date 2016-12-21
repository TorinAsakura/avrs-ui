import React, { Component } from 'react'
import * as d3Selection from 'd3-selection'
import * as d3Shape from 'd3-shape'
import { interpolatePath } from 'd3-interpolate-path'

class Lines extends Component {
  static defaultProps = {
    stroke: '#0288D1',
  }

  constructor(props, context) {
    super(props, context)

    this.state = {
      xDomain: props.xScale.domain(),
      yDomain: props.yScale.domain(),
    }
  }

  componentDidMount() {
    const { data } = this.props
    const { xScale, yScale } = this.props

    this.line = d3Shape.line()
                        .curve(d3Shape.curveCatmullRom)
                        .x((d, i) => xScale(i))
                        .y(d => yScale(d))

    this.element
      .datum(data)
      .attr('d', this.line)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.updatePaths(nextProps.data, nextProps.data.length > this.props.data.length)
    }

    if (nextProps.width !== this.props.width || nextProps.height !== this.props.height) {
      this.updatePaths(nextProps.data, false)
    }
  }

  onSetRef = (element) => {
    this.element = d3Selection.select(element)
  }

  getStyle() {
    const { stroke } = this.props

    return {
      strokeWidth: '3px',
      fill: 'none',
      stroke,
    }
  }

  updatePaths = (data, animate = true) => {
    const line = this.line
    const element = this.element

    if (animate) {
      this.element
          .datum(data)
          .transition()
          .duration(750)
          .attrTween('d', d => interpolatePath(element.attr('d'), line(d)))
    } else {
      this.element
          .datum(data)
          .attr('d', this.line)
    }
  }

  render() {
    return (
      <g style={this.getStyle()}>
        <path
          filter='url(#lines-shadow)'
          ref={this.onSetRef}
        />
      </g>
    )
  }
}

export default Lines
