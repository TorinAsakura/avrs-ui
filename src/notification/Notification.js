import React, { Component } from 'react'
import { TransitionMotion, spring } from 'react-motion'
import Notice from './Notice'

class Notification extends Component {
  onWillEnter() {
    return {
      opacity: 0,
      top: 0,
    }
  }

  onWillLeave() {
    return {
      opacity: spring(0),
      top: 10,
    }
  }

  getStyles(elements = {}) {
    return elements.map(node => ({
      key: node.key,
      style: {
        opacity: spring(1),
        top: spring(10),
      },
      data: node,
    }))
  }

  renderAnimationBlock = (elements) => {
    const { onDismiss } = this.props

    return (
      <div style={{ position: 'fixed', zIndex: 10 }}>
        {elements.map(({ key, style, data: { color, message } }) => (
          <Notice
            key={key}
            color={color}
            style={style}
            onClick={onDismiss && onDismiss.bind(this, key)}
          >
            {message}
          </Notice>
        ))}
      </div>
    )
  }

  render() {
    const { messages } = this.props

    return (
      <TransitionMotion
        styles={this.getStyles(messages)}
        willEnter={this.onWillEnter}
        willLeave={this.onWillLeave}
      >
        {this.renderAnimationBlock}
      </TransitionMotion>
    )
  }
}

export default Notification
