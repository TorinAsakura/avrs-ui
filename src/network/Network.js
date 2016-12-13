/* eslint-disable no-param-reassign */
/* eslint-disable no-confusing-arrow */
/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react'
import { StyleSheet } from 'elementum'
import * as d3Selection from 'd3-selection'
import * as d3Hierarchy from 'd3-hierarchy'
import * as d3Zoom from 'd3-zoom'
import { diagonal } from './utils'

const styles = StyleSheet.create({
  self: {
    '& .node': {
      cursor: 'pointer',
    },
    '& .node circle': {
      fill: '#fff',
      stroke: '#0288D1',
      strokeWidth: '3px',
    },
    '& .node text': {
      font: '14px sans-serif',
    },
    '& .link': {
      fill: 'none',
      stroke: '#0288D1',
      strokeWidth: '3px',
    },
  },
})

let index = 0

class Network extends Component {
  static defaultProps = {
    width: 750,
    height: 500,
    duration: 750,
  }

  componentDidMount() {
    const { width, height, data } = this.props

    const treemap = d3Hierarchy.tree().size([width, height])

    const root = d3Hierarchy.hierarchy(data, d => d.children)
    root.x0 = width / 2
    root.y0 = 0

    this.treemap = treemap
    this.root = root

    this.update(root)
  }

  onClick = (d) => {
    const { onClick } = this.props

    this.update(d, true)

    if (onClick && d.selected) {
      onClick(d.data)
    }
  }

  onZoomed = () => {
    const { x, y, k } = d3Selection.event.transform

    this.element.attr('transform', `translate(${x},${y}) scale(${k})`)
  }

  onMountSvg = (element) => {
    const zoom = d3Zoom.zoom().scaleExtent([0.1, 3]).on('zoom', this.onZoomed)

    d3Selection.select(element).call(zoom)
  }

  onSetRef = (element) => {
    this.element = d3Selection.select(element)
  }

  getSize(d) {
    return 10 + ((d.children || d._children || []).length * 2)
  }

  update = (source, selected) => {
    const { duration } = this.props
    const svg = this.element
    const treemap = this.treemap
    const root = this.root

    const treeData = treemap(root)

    const nodes = treeData.descendants()
    const links = treeData.descendants().slice(1)

    nodes.forEach((d) => {
      if (selected) {
        if (source.parent) {
          if (d !== source) {
            d.selected = false
          } else {
            d.selected = true
          }
        }
      }

      d.y = d.depth * 150
      d.nameWidth = d.data.name.length * 9

      const level = nodes.filter(node => node.depth === d.depth)
      const center = Math.round(level.length / 2)
      const nodeIndex = level.indexOf(d)

      d.direction = (nodeIndex + 1) <= center ? 'end' : 'start'

      if (nodeIndex > 0) {
        let offset = 0

        if (d.direction === 'start') {
          offset = level.slice(1, nodeIndex).reduce((result, node) => result + node.nameWidth, 0)
        } else {
          offset = level.slice(0, nodeIndex).reduce((result, node) => result + node.nameWidth, 0)
        }

        d.x = d.x + offset // eslint-disable-line operator-assignment
      }
    })

    const node = svg.selectAll('g.node')
                    .data(nodes, d => d.id || (d.id = ++index)) // eslint-disable-line no-plusplus

    const nodeEnter = node
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr('transform', () => `translate(${source.x0}, ${source.y0})`)
      .on('click', this.onClick)

    nodeEnter
      .append('circle')
      .attr('class', 'node')
      .attr('r', 10)
      .style('fill', d => d._children ? '#0288D1' : '#fff')

    nodeEnter
      .append('text')
      .attr('dy', '.35em')
      .attr('x', d => d.direction === 'end' ? (this.getSize(d) + 5) * -1 : this.getSize(d) + 5)
      .attr('text-anchor', d => d.direction)
      .text(d => d.data.name)

    const nodeUpdate = nodeEnter.merge(node)

    nodeUpdate.transition()
      .duration(duration)
      .attr('transform', d => `translate(${d.x}, ${d.y})`)

    nodeUpdate.select('circle.node')
      .attr('r', this.getSize)
      .style('fill', d => d.selected ? '#0288D1' : '#fff') // eslint-disable-line no-confusing-arrow
      .attr('cursor', 'pointer')

    const nodeExit = node
      .exit()
      .transition()
      .duration(duration)
      .attr('transform', () => `translate(${source.x}, ${source.y})`)
      .remove()

    nodeExit
      .select('circle')
      .attr('r', 1e-6)

    nodeExit
      .select('text')
      .style('fill-opacity', 1e-6)

    const link = svg.selectAll('path.link').data(links, d => d.id)

    const linkEnter = link
      .enter()
      .insert('path', 'g')
      .attr('class', 'link')
      .attr('d', () => diagonal({ x: source.x0, y: source.y0 }, source))

    const linkUpdate = linkEnter.merge(link)

    linkUpdate
      .transition()
      .duration(duration)
      .attr('d', d => diagonal(d.parent, d))

    link
      .exit()
      .transition()
      .duration(duration)
      .attr('d', d => diagonal(d.parent, { x: source.x, y: source.y }))
      .remove()

    nodes.forEach((d) => {
      d.x0 = d.x
      d.y0 = d.y
    })
  }

  render() {
    const { width, height } = this.props

    return (
      <svg
        width={width}
        height={height}
        ref={this.onMountSvg}
        className={styles()}
      >
        <g
          transform='translate(0, 20)'
          ref={this.onSetRef}
        />
      </svg>
    )
  }
}

export default Network
