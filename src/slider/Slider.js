/* eslint-disable react/no-did-mount-set-state */
import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment'
import { StyleSheet } from 'elementum'
import Marker from './Marker'
import Gap from './Gap'
import Handle from './Handle'

const styles = StyleSheet.create({
  self: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    margin: '3px 6px 0px 4px',
  },
})

class Slider extends Component {
  static defaultProps = {
    markers: [],
    prefix: null,
  }

  constructor(props, context) {
    super(props, context)

    this.markers = {}

    this.state = {
      value: props.value || props.markers[0],
      offsets: {},
    }
  }

  componentDidMount() {
    this.setState({
      offsets: this.calculateMarkers(this.markers),
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value })
    }
  }

  onChange = (value) => {
    const { onChange } = this.props

    if (onChange) {
      onChange(value)
    }
  }

  onClick = ({ nativeEvent }, prevMarker, nextMarker) => {
    const { offsets } = this.state
    const gapWidth = offsets[nextMarker] - offsets[prevMarker]

    if (nativeEvent.offsetX < (gapWidth / 2)) {
      this.onChange(prevMarker)
    } else {
      this.onChange(nextMarker)
    }
  }

  setMarker = (marker, element) => {
    if (element) {
      this.markers[marker] = element
    }
  }

  calculateMarkers = (markers) => {
    if (!canUseDOM) {
      return {}
    }

    return Object.keys(markers).reduce((result, marker) => {
      const element = findDOMNode(markers[marker])

      return {
        ...result,
        [marker]: element.offsetLeft + (element.offsetWidth / 2),
      }
    }, {})
  }

  renderMarkers() {
    const { markers, prefix } = this.props
    const { value } = this.state

    return markers.reduce((result, marker, index) => {
      result.push(
        <Marker
          key={`marker-${index}`}
          ref={element => this.setMarker(marker, element)}
          active={value === marker}
          onClick={() => this.onChange(marker)}
        >
          {marker}{prefix}
        </Marker>,
      )

      if (index < (markers.length - 1)) {
        result.push(
          <Gap
            key={`gap-${index}`}
            onClick={event => this.onClick(event, marker, markers[index + 1])}
          />,
        )
      }

      return result
    }, [])
  }

  renderHandle() {
    const { offsets, value } = this.state

    if (!offsets[value]) {
      return null
    }

    return (
      <Handle
        position={offsets[value]}
      />
    )
  }

  render() {
    return (
      <div className={styles()}>
        {this.renderMarkers()}
        {this.renderHandle()}
      </div>
    )
  }
}

export default Slider
