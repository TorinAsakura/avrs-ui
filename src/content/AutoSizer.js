import React, { Component, cloneElement } from 'react'
import { findDOMNode } from 'react-dom'
import { contentSize } from './utils'

class AutoSizer extends Component {
  state = {
    width: 0,
    height: 0,
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
  }

  onResize = () => {
    const { width, height } = contentSize(findDOMNode(this).parentNode)

    this.setState({ width, height })
  }

  onSetRef = (element) => {
    if (element) {
      const { width, height } = contentSize(findDOMNode(element).parentNode)

      this.setState({ width, height })
    }
  }

  render() {
    const { children } = this.props
    const { width, height } = this.state

    if (!(width > 0 && height > 0)) {
      return <div ref={this.onSetRef} />
    }

    return cloneElement(children, { width, height })
  }
}

export default AutoSizer
