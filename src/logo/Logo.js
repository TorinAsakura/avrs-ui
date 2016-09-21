import React, { PropTypes } from 'react'
import { getSize } from './utils'

const Logo = ({ height = 88 }) => (
  <svg {...getSize(height, (371 / 200))} viewBox='0 0 371 200'>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g transform='translate(-264.000000, -125.000000)'>
        <g transform='translate(264.000000, 125.000000)'>
          <g transform='translate(163.475309, 1.000000)'>
            <path
              fill='#0288D1'
              d='M69.7915096,0.284634761 L103.509923,86.6826196 L77.8481217,199
                L0.265931212,0.284634761 L69.7915096,0.284634761 Z'
            />
            <path
              fill='#0665AF'
              d='M103.509923,86.6826196 L137.52673,0.284634761 L207.052308,0.284634761
              L129.470118,199 L77.8481217,199 L103.509923,86.6826196 Z'
            />
          </g>
          <g transform='translate(104.000000, 99.500000) scale(1, -1) translate(-104.000000, -99.500000) '>
            <path
              fill='#0665B0'
              d='M87.2379994,49.4363267 L137.52673,0.284634761
                L207.052308,0.284634761 L129.470118,199 L87.2379994,49.4363267 Z'
            />
            <path
              fill='#0288D1'
              d='M69.7915096,0.284634761 L103.509923,86.6826196 L129.470118,199
                L77.8481217,199 L0.265931212,0.284634761 L69.7915096,0.284634761 Z'
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
)

Logo.propTypes = {
  height: PropTypes.number,
}

export default Logo

