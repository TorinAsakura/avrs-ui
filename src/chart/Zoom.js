import React, { Component } from 'react'
import * as d3Selection from 'd3-selection'
import * as d3Zoom from 'd3-zoom'

class Zoom extends Component {
  static defaultProps = {
  }

  componentDidMount() {
    const { width, height, onZoomed } = this.props

    const zoom = this.zoom = d3Zoom.zoom()
      .scaleExtent([1, Infinity])
      .translateExtent([[0, 0], [width, height]])
      .extent([[0, 0], [width, height]])
      .on('zoom', onZoomed)

    this.element.call(zoom)
  }

  onSetRef = (element) => {
    this.element = d3Selection.select(element)
  }

  setScale = (width, s) => {
    this.element.call(this.zoom.transform, d3Zoom.zoomIdentity
      .scale(width / (s[1] - s[0]))
      .translate(-s[0], 0))
  }

  getStyle() {
    return {
      cursor: 'move',
      fill: 'none',
      pointerEvents: 'all',
    }
  }

  render() {
    const { width, height, onMouseMove, onMouseOver, onMouseOut } = this.props

    return (
      <rect
        width={width}
        height={height}
        style={this.getStyle()}
        ref={this.onSetRef}
        onMouseMove={onMouseMove}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      />
    )
  }
}

export default Zoom
