Service Plans
=============

### PromoServicePlan

```
import React, { Component } from 'react'
import { Column, Layout } from 'flex-layouts'
import PromoServicePlan from './PromoServicePlan'

const PromoServicePlanExample = () => (
  <div style={{ marginBottom: 40, width: '100%' }}>
    <Column>
      <Layout basis='190px'>
        <PromoServicePlan
          type='basis'
          name='Базис'
          price='До 0,14 €'
          priceUnit='в час'
          time='10 Часов'
          timeUnit='в сутки'
        />
      </Layout>
      <Layout basis='25px' />
      <Layout basis='190px'>
        <PromoServicePlan
          active
          type='standard'
          name='Стандарт'
          price='До 0,25 €'
          priceUnit='в час'
          time='12 Часов'
          timeUnit='в сутки'
        />
      </Layout>
      <Layout basis='25px' />
      <Layout basis='190px'>
        <PromoServicePlan
          type='premium'
          name='Премиум'
          price='До 0,59 €'
          priceUnit='в час'
          time='15 Часов'
          timeUnit='в сутки'
        />
      </Layout>
      <Layout basis='25px' />
      <Layout basis='190px'>
        <PromoServicePlan
          hideRightBorder
          type='business'
          name='Бизнес'
          price='До 0,74 €'
          priceUnit='в час'
          time='20 Часов'
          timeUnit='в сутки'
        />
      </Layout>
    </Column>
  </div>
)

export default PromoServicePlanExample
```
