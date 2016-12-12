import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    maxWidth: '55%',
    padding: '15px',
    marginBottom: '4px',
    marginLeft: '2px',
    borderRadius: '10px',
    position: 'relative',
    fontSize: '13px',
    lineHeight: '18px',
    fontFamily: '"Ubuntu", sans-serif',
    boxSizing: 'border-box',
    background: '#F2F2F2',
    color: '#505458',
    '& svg': {
      position: 'absolute',
      left: '-3px',
      bottom: '-3px',
    },
    '& svg g': {
      fill: '#F2F2F2',
    },
  },
})

const Comma = () => (
  <svg width='10px' height='12px' viewBox='0 0 21 23'>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g transform='translate(-281.000000, -305.000000)'>
        <g transform='translate(150.000000, 81.000000)'>
          <g transform='translate(131.000000, 157.000000)'>
            <path
              transform='translate(10.050969, 78.193562) scale(-1, 1) translate(-10.050969, -78.193562) '
              d='M0.00662593223,70.3871237 C0.00221791635,70.5532538
                2.27373675e-13,70.7199297 2.27373675e-13,70.8871237
                C2.27373675e-13,81.1043921 8.28273162,89.3871237
                18.5,89.3871237 C19.0396886,89.3871237 19.5739796,
                89.3640142 20.1019376,89.3187308 C16.3723552,86.1085754
                14,81.2830448 14,75.8871237 C14,70.3783969 14,68.0144395
                14,67 L0.00662593223,70.3871237 Z'
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
)

const Question = ({ children }) => (
  <div className={styles()}>
    {children}
    <Comma />
  </div>
)

export default Question
