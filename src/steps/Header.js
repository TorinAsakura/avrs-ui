import React, { Children } from 'react'
import { StyleSheet } from 'elementum'
import TabDivider from './TabDivider'
import Tab from './Tab'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    boxSizing: 'border-box',
    borderBottom: '1px solid #E5E5E5',
  },
})

const renderTabs = (children, current) =>
  Children.toArray(children).reduce((result, child, index) => {
    if (index !== 0) {
      result.push(
        <TabDivider key={`divider-${index}`} />,
      )
    }

    result.push(
      <Tab
        key={index}
        active={current >= index}
      >
        {child.props.title}
      </Tab>,
    )

    return result
  }, [])

const Header = ({ children, current }) => (
  <div className={styles()}>
    {renderTabs(children, current)}
  </div>
)

export default Header
