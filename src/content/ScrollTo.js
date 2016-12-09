import { Component } from 'react'
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment'
import scrollIntoView from 'scroll-into-view'

class ScrollTo extends Component {
  componentDidMount() {
    if (canUseDOM) {
      this.scrollTo(this.props.to)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (canUseDOM && nextProps.to !== this.props.to) {
      this.scrollTo(nextProps.to)
    }
  }

  scrollTo(to) {
    const { prefix } = this.props
    const element = [prefix, to].filter(item => !!item).join('-')

    const target = document.getElementById(element)

    if (target) {
      scrollIntoView(target, {
        time: 500,
        align: {
          top: 0.1,
        },
      })
    }
  }

  render() {
    return this.props.children
  }
}

export default ScrollTo
