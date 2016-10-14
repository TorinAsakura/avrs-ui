import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { StyleSheet } from 'elementum'
import Body from './Body'

const styles = StyleSheet.create({
  self: {
    position: 'fixed',
    zIndex: 90,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    background: 'rgba(29, 35, 42, 0.8)',
  },
})

class Modal extends Component {
  state = {
    showClose: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showClose: true })
    }, 250)
  }

  onClick = ({ target }) => {
    const { onClose } = this.props

    if (target === findDOMNode(this) && onClose) {
      onClose()
    }
  }

  render() {
    const { children, onClose } = this.props
    const { showClose } = this.state

    return (
      <div
        className={styles()}
        onClick={this.onClick}
      >
        <Body
          showClose={showClose}
          onClose={onClose}
        >
          {children}
        </Body>
      </div>
    )
  }
}

export default Modal
