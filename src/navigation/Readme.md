Navigation
==========

```
import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Navigation, Item } from './index'
import { HomeIcon, WalletIcon } from '../icons'
import { Space } from '../text'

const IconsExample = () => (
  <div style={{ height: 300, background: '#f3f5f8', padding: 20 }}>
    <Column fill>
      <Layout basis='200px'>
        <Navigation>
          <Row>
            <Layout>
              <Item>
                <HomeIcon />
                <Space />
                Home
              </Item>
            </Layout>
          </Row>
          <Row>
            <Layout>
              <Item>
                <WalletIcon />
                <Space />
                Money
              </Item>
            </Layout>
          </Row>
        </Navigation>
      </Layout>
    </Column>
  </div>
)

export default IconsExample
```
