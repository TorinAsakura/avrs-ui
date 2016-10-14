import React from 'react'
import { StyleSheet } from 'elementum'
import { Column, Layout } from 'flex-layouts'
import Pointer from './Pointer'
import Tab from './Tab'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
  },
})

const Title = ({ active, children = [], onChange }) => (
  <div className={styles()}>
    <Column justify='center'>
      {children.map((child, index) => (
        <Layout key={index}>
          <Tab
            active={index === active}
            onClick={() => onChange(index)}
          >
            {child.props.title}
          </Tab>
        </Layout>
      ))}
    </Column>
    <Pointer active={active} />
  </div>
)

export default Title
