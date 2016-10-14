import React, { Component } from 'react'
import { StyleSheet } from 'elementum'
import PointerArrow from './PointerArrow'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    height: '4px',
    display: 'flex',
    boxShadow: 'inset 0px 1px 1px 0px #e5e5e5',
  },
})

class Pointer extends Component {
  state = {
    offset: 0,
    tabs: [],
    ready: false,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.active !== this.props.active) {
      this.onSetOffset(nextProps.active)
    }
  }

  onSetOffset = (active) => {
    const { tabs } = this.state

    const el = tabs[active]
    const offset = el.offsetLeft + ((el.clientWidth / 2) - 10)

    this.setState({ offset }, () => this.setState({ ready: true }))
  }

  onRender = (el) => {
    const { active } = this.props

    if (el && el.previousElementSibling) {
      this.setState({ tabs: el.previousElementSibling.childNodes }, () => this.onSetOffset(active))
    }
  }

  render() {
    const { offset, ready } = this.state

    return (
      <div
        ref={this.onRender}
        className={styles()}
      >
        {ready && <PointerArrow offset={offset} />}
      </div>
    )
  }
}

export default Pointer
