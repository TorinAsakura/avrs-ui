import { Component, PropTypes, createElement } from 'react'

function processEvents(events) {
  return Object.keys(events).reduce((result, event) => ({
    ...result,
    [event]: (result[event] || []).concat(events[event]),
  }), {})
}

const connect = (connectors = [], target) => {
  class StateConnector extends Component {
    static propTypes = {
      children: PropTypes.element,
    }

    constructor(props, context) {
      super(props, context)

      const { state, events } = connectors.reduce(this.combineConnectors, { state: {}, events: {} })
      this.state = state
      this.events = Object.keys(events).reduce((res, event) => ({
        ...res,
        [event]: this.processEvent.bind(this, events[event]),
      }), {})
    }

    combineConnectors = (result, { state, ...events } = {}) => ({
      state: {
        ...result.state,
        ...state,
      },
      events: {
        ...result.events,
        ...processEvents(events),
      },
    })

    processEvent(handlers, event) {
      const state = handlers.reduce((result, handler) => ({
        ...result,
        ...handler(event, this.state),
      }), {})

      this.setState(state)
    }

    render() {
      const { children, ...props } = this.props

      return createElement(target, {
        ...this.state,
        ...this.events,
        ...props,
      }, children)
    }
  }

  return StateConnector
}

export default connect
