import React, { Component } from 'react'
import moment from 'moment'
import { StyleSheet } from 'elementum'
import d3Selection from 'd3-selection'
import d3Axis from 'd3-axis'
import { isDomainEquals } from './utils'

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
  constructor(props, context) {
    super(props, context)

    this.state = {
      xDomain: props.xScale.domain(),
    }
  }

  componentDidMount() {
    const { height, xScale } = this.props

    this.axis = d3Axis.axisBottom(xScale)
                    .tickSize(height * -1)
                    .tickPadding(12)
                    .tickFormat(value => moment(value).format('DD MMM'))

    this.element
        .attr('transform', `translate(0, ${height})`)
        .call(this.axis)
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
