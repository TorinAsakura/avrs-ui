import React, { Component } from 'react'
import { StyleSheet } from 'elementum'
import * as d3Selection from 'd3-selection'
import * as d3Axis from 'd3-axis'

const styles = StyleSheet.create({
  self: {
    '& line': {
      stroke: '#f2f2f2',
    },
    '& path': {
      stroke: '#f2f2f2',
    },
    '& text': {
      color: 'rgba(0, 0, 0, 0.9)',
      fontWeight: 300,
      fontSize: '11px',
      fontFamily: '"Ubuntu", "Helvetica Neue", Helvetica, sans-serif',
    },
  },
})

class YAxis extends Component {
  componentDidMount() {
    const { width, yScale } = this.props

    this.axis = d3Axis.axisLeft(yScale)
                        .tickSize((width * -1) - 1)
                        .tickPadding(10)
                        .ticks([8])

    this.element.call(this.axis)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.width !== this.props.width) {
      this.axis.tickSize((nextProps.width * -1) - 1)
      this.element.call(this.axis)
    }
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
