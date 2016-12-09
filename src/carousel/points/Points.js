import React from 'react'
import { StyleSheet } from 'elementum'
import { Column, Layout } from 'flex-layouts'
import Point from './Point'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    display: 'flex',
  },
})

const Points = ({ active, children = [], onChange }) => (
  <div className={styles()}>
    <Column justify='center'>
      {children.map((child, index) => (
        <Layout key={index}>
          <Point
            active={index === active}
            onClick={() => onChange(index)}
          />
        </Layout>
      ))}
    </Column>
  </div>
)

export default Points
