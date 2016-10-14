Carousel
========


```
import React, { Component } from 'react'
import Carousel from './Carousel'
import Screen from './Screen'

const CarouselExample = () => (
  <div style={{ height: 300 }}>
    <Carousel>
      <Screen title='first'>
        <div style={{ width: '100%', height: '100%', padding: '20px'}}>
          First content
        </div>
      </Screen>
      <Screen title='second'>
        <div style={{ width: '100%', height: '100%', padding: '20px'}}>
          Second content
        </div>
      </Screen>
    </Carousel>
  </div>
)

export default CarouselExample
```
