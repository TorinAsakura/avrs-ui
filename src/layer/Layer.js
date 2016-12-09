import React, { PropTypes, Component } from 'react'
import ReactDOM, { findDOMNode } from 'react-dom'
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment'
import Tether from 'tether'
import { expose } from './utils'

class Layer extends Component {
  static propTypes = {
    // target: PropTypes.instanceOf(Element),
    align: PropTypes.string,
    classes: PropTypes.string,
    onOutsideClick: PropTypes.func,
    children: PropTypes.element,
  }

  static defaultProps = {
    align: 'tl-bl',
  }

  componentDidMount() {
    if (canUseDOM) {
      this.mountLayer(this.props)
    }
  }

  componentWillReceiveProps(props) {
    if (props.target !== this.props.target) {
      this.unmountLayer()
      this.mountLayer(props)
      return
    }

    let options = this.layer.options

    if (props.align !== this.props.align) {
      const [attachment, targetAttachment] = expose(props.align)

      options = {
        ...options,
        attachment,
        targetAttachment,
      }
    }

    if (props.classes !== this.props.classes) {
      options = {
        ...options,
        classes: props.classes,
      }
    }

    if (options !== this.layer.options) {
      this.layer.setOptions(options)
      this.layer.position()
    }

    if (props.children !== this.props.children) {
      ReactDOM.render(props.children, this.layer.element)
    }
  }

  componentWillUnmount() {
    if (canUseDOM) {
      this.unmountLayer()
    }
  }

  onOutsideClick = (event) => {
    const { target } = event

    if (!this.layer.element.contains(target)) {
      this.props.onOutsideClick(event)
    }
  }

  mountLayer({ target, align, constraints, offset, classes, children, onChangePosition, onOutsideClick }) {
    const element = document.createElement('div')
    document.body.appendChild(element)

    const [attachment, targetAttachment] = expose(align)

    const options = {
      element,
      attachment,
      targetAttachment,
      onChangePosition,
      target: target || findDOMNode(this).parentNode,
    }

    if (constraints) {
      options.constraints = constraints
    }

    if (offset) {
      options.offset = offset
    }

    if (classes) {
      options.classes = classes
    }

    this.layer = new Tether(options)

    ReactDOM.render(this.renderChildren(children, options), this.layer.element)

    if (onOutsideClick) {
      document.addEventListener('click', this.onOutsideClick)
      document.addEventListener('touchstart', this.onOutsideClick)
    }

    this.layer.enable()
  }

  unmountLayer() {
    this.layer.destroy()

    if (this.layer.element) {
      ReactDOM.unmountComponentAtNode(this.layer.element)
      document.body.removeChild(this.layer.element)
    }

    if (this.props.onOutsideClick) {
      document.removeEventListener('click', this.onOutsideClick)
      document.removeEventListener('touchstart', this.onOutsideClick)
    }
  }

  renderChildren(children) {
    if (!children) {
      return null
    }

    return children
  }

  render() {
    return (
      <noscript />
    )
  }
}

export default Layer
