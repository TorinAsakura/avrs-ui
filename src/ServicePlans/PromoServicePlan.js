import React from 'react'
import { StyleSheet } from 'elementum'
import { Row, Layout } from 'flex-layouts'
import Text from '../text/Text'
import OkIcon from '../icons/OkIcon'
import Condition from '../condition/Condition'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    position: 'relative',
    width: '100%',
    border: '1px solid #E5E5E5',
    boxSizing: 'border-box',
    borderRadius: '3px',
    padding: '0px 40px',
    alignItems: 'initial',
    fontSize: '24px',
    fontFamily: '"Ubuntu", sans-serif',
    cursor: 'pointer',
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.01)',
    },
  },
  'type=basis': {
    color: '#657684',
  },
  'type=standard': {
    color: '#0288d1',
  },
  'type=premium': {
    color: '#ff6701',
  },
  'type=business': {
    color: '#00bb27',
  },
  'active=basis': {
    borderColor: '#657684',
    '& svg': {
      fill: '#657684',
    },
  },
  'active=standart': {
    borderColor: '#0288d1',
    '& svg': {
      fill: '#0288d1',
    },
  },
  'active=premium': {
    borderColor: '#ff6701',
    '& svg': {
      fill: '#ff6701',
    },
  },
  'active=business': {
    borderColor: '#00bb27',
    '& svg': {
      fill: '#00bb27',
    },
  },
})

const PromoServicePlan = ({ name, active, type = 'basis', time, cpu, memory, price, messages = {}, onClick }) => (
  <div
    className={styles({ type, active: active ? type : null })}
    onClick={onClick}
  >
    <Condition match={active}>
      <div style={{ position: 'absolute', top: 10, right: 10 }}>
        <OkIcon height={20} />
      </div>
    </Condition>
    <Row>
      <Layout basis='35px' />
      <Layout>
        <div>
          {name}
        </div>
      </Layout>
      <Layout basis='15px' />
      <Layout>
        <Text
          size='medium'
          weight='medium'
          color='black400'
        >
          {time} {messages.hours}
        </Text>
      </Layout>
      <Layout>
        <Text
          color='gray250'
          size='xsmall'
        >
          {messages.perDay}
        </Text>
      </Layout>
      <Layout basis='15px' />
      <Layout>
        <Text
          size='medium'
          weight='medium'
          color='black400'
        >
          {cpu} %
        </Text>
      </Layout>
      <Layout>
        <Text
          color='gray250'
          size='xsmall'
        >
          {messages.cpu}
        </Text>
      </Layout>
      <Layout basis='15px' />
      <Layout>
        <Text
          size='medium'
          weight='medium'
          color='black400'
        >
          {memory / 1024} GB
        </Text>
      </Layout>
      <Layout>
        <Text
          color='gray250'
          size='xsmall'
        >
          {messages.memory}
        </Text>
      </Layout>
      <Layout basis='15px' />
      <Layout>
        <Text
          size='medium'
          weight='medium'
          color='black400'
        >
          {price} €
        </Text>
      </Layout>
      <Layout>
        <Text
          color='gray250'
          size='xsmall'
        >
          {messages.price}
        </Text>
      </Layout>
      <Layout basis='35px' />
    </Row>
  </div>
)

export default PromoServicePlan
