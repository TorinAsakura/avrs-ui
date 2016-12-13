import React, { Component } from 'react'
import { StyleSheet } from 'elementum'
import * as d3Selection from 'd3-selection'
import * as d3Axis from 'd3-axis'

const styles = StyleSheet.create({
  self: {
    '& line': {
      stroke: '#E5E5E5',
    },
    '& path': {
      stroke: '#E5E5E5',
    },
    '& text': {
      stroke: '#778997',
      fontWeight: 300,
      fontFamily: '"Ubuntu", sans-serif',
    },
  },
})

class YAxis extends Component {
  componentDidMount() {
    const { width, yScale } = this.props

    this.axis = d3Axis.axisLeft(yScale)
                        .tickSize((width * -1) - 1)
                        .ticks([4])

    this.element
      .attr('transform', 'translate(-1, 0)')
      .call(this.axis)
  }

  onSetRef = (element) => {
    this.element = d3Selection.select(element)
  }

  render() {
    return (
      <g
        className={styles()}
        ref={this.onSetRef}
      />
    )
  }
}

export default YAxis
