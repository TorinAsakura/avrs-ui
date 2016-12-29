import React from 'react'
import Icon from './Icon'

const DownloadAppIcon = props => (
  <Icon originalWidth={90} originalHeight={90} {...props}>
    <defs>
      <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='download-app-linearGradient-1'>
        <stop stopColor='#0665AF' offset='0%' />
        <stop stopColor='#0288D1' offset='100%' />
      </linearGradient>
    </defs>
    <g>
      <rect
        x='0' y='0' width='90' height='90' rx='3'
        fill='url(#download-app-linearGradient-1)'
      />
      <polygon
        fill='#FFFFFF'
        fillOpacity='0.95'
        points='58.625 49.875 58.625 58.625 32.375 58.625 32.375 49.875 28 49.875 28 63 63 63 63 49.875'
      />
      <polygon
        fill='#FFFFFF'
        fillOpacity='0.95'
        points='54.25 41.125 49.875 41.125 49.875 28 41.125 28 41.125 41.125 36.75 41.125 45.5 54.25'
      />
    </g>
  </Icon>
)

export default DownloadAppIcon
