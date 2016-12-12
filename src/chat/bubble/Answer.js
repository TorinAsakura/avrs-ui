import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    maxWidth: '55%',
    padding: '15px',
    marginBottom: '4px',
    marginRight: '2px',
    borderRadius: '10px',
    position: 'relative',
    fontSize: '13px',
    lineHeight: '18px',
    fontFamily: '"Ubuntu", sans-serif',
    boxSizing: 'border-box',
    background: '#0288D1',
    color: '#ffffff',
    '& svg': {
      position: 'absolute',
      right: '-3px',
      bottom: '-3px',
    },
    '& svg g': {
      fill: '#0288D1',
    },
  },
})

const Comma = () => (
  <svg width='10px' height='12px' viewBox='0 0 21 23'>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g transform='translate(-923.000000, -474.000000)'>
        <g transform='translate(150.000000, 81.000000)'>
          <g transform='translate(487.000000, 247.000000)'>
            <path
              d='M286.006626,149.387124 C286.002218,149.553254 286,149.71993 286,
                149.887124 C286,160.104392 294.282732,168.387124 304.5,168.387124
                C305.039689,168.387124 305.57398,168.364014 306.101938,168.318731
                C302.372355,165.108575 300,160.283045 300,154.887124 C300,149.378397
                300,147.014439 300,146 L286.006626,149.387124 Z'
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
)

const Answer = ({ children }) => (
  <div className={styles()}>
    {children}
    <Comma />
  </div>
)

export default Answer

