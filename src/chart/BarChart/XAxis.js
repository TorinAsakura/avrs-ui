import React, { Component } from 'react'
import moment from 'moment'
import { StyleSheet } from 'elementum'
import * as d3Selection from 'd3-selection'
import * as d3Axis from 'd3-axis'

const styles = StyleSheet.create({
  self: {
    '& line': {
      stroke: '#E5E5E5',
    },
    '& > g:nth-child(2) line': {
      stroke: '#E5E5E5',
    },
    '& path': {
      stroke: 'transparent',
    },
    '& text': {
      stroke: '#778997',
      fontWeight: 300,
      fontFamily: '"Ubuntu", sans-serif',
      opacity: 0.7,
    },
  },
})

class XAxis extends Component {
  static defaultProps = {
    stepSize: 9,
  }

  constructor(props, context) {
    super(props, context)

    this.state = {
      xDomain: props.xScale.domain(),
    }
  }

  componentDidMount() {
    const { height, xScale, data, stepSize } = this.props

    this.axis = d3Axis.axisBottom(xScale)
                    .tickSize(height * -1)
                    .tickPadding(12)
                    .tickValues(data.filter((d, i) => ((i % stepSize) === 0)).map(({ date }) => date))
                    .tickFormat(value => moment(value).format('DD MMM'))

    this.element
        .attr('transform', `translate(0, ${height})`)
        .call(this.axis)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.redraw(nextProps.data)
    }
  }

  onSetRef = (element) => {
    this.element = d3Selection.select(element)
  }

  redraw(data) {
    const { stepSize } = this.props

    this.axis.tickValues(data.filter((d, i) => ((i % stepSize) === 0)).map(({ date }) => date))
    this.element.call(this.axis)
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

export default XAxis
