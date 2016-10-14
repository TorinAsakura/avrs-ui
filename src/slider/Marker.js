/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { StyleSheet } from 'elementum'
import Tick from './Tick'
import Value from './Value'

const styles = StyleSheet.create({
  self: {
    position: 'relative',
    paddingBottom: '30px',
  },
})

class Marker extends Component {
  render() {
    const { children, active, onClick } = this.props

    return (
      <div className={styles()}>
        <Tick onClick={onClick} />
        <Value
          active={active}
          onClick={onClick}
        >
          {children}
        </Value>
      </div>
    )
  }
}

export default Marker
