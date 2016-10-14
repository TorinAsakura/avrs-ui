import React, { Component } from 'react'
import { Row, Layout } from 'flex-layouts'
import Title from './title/Title'
import Content from './content/Content'
import Points from './points/Points'

class Carousel extends Component {
  state = {
    active: 0,
  }

  onChange = (active) => {
    this.setState({ active })
  }


  render() {
    const { children } = this.props
    const { active } = this.state

    return (
      <Row>
        <Layout>
          <Title
            active={active}
            onChange={this.onChange}
          >
            {children}
          </Title>
        </Layout>
        <Layout grow={1}>
          <Content active={active}>
            {children}
          </Content>
        </Layout>
        <Layout>
          <Points
            active={active}
            onChange={this.onChange}
          >
            {children}
          </Points>
        </Layout>
      </Row>
    )
  }
}

export default Carousel
