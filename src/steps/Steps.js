import React, { Children } from 'react'
import { Row, Layout } from 'flex-layouts'
import Header from './Header'

const Steps = ({ children, current = 0 }) => (
  <Row>
    <Layout>
      <Header current={current}>
        {children}
      </Header>
    </Layout>
    <Layout grow={1}>
      {Children.toArray(children)[current]}
    </Layout>
  </Row>
)

export default Steps
