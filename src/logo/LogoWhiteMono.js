/* eslint-disable max-len */
import React, { PropTypes } from 'react'
import { getSize } from './utils'

const LogoWhiteMono = ({ height = 88 }) => (
  <svg {...getSize(height, (101 / 55))} viewBox='0 0 101 55'>
    <g
      fill='none'
      stroke='none'
      strokeWidth='1'
      fillRule='evenodd'
    >
      <g transform='translate(-97.000000, -515.000000)' fill='#FFFFFF'>
        <g transform='translate(97.000000, 514.000000)'>
          <g transform='translate(44.218542, 1.472734)'>
            <polygon
              points='18.8779504 0.0767401999 26.7562125 22.1308636 19.8149353 52.4126823 0.0719319051 0.0767401999'
            />
            <polygon
              points='27.9984659 23.3704469 37.1996938 0.0767401999 56.0057123
                      0.0767401999 35.0204556 53.6522656 21.0571886 53.6522656'
            />
          </g>
          <g transform='translate(28.500000, 27.855391) scale(1, -1) translate(-28.500000, -27.855391) translate(0.000000, 0.855391)'>
            <polygon
              points='29.243567 22.6307501 25.4604427 12.7087055 37.1996938 0.0767401999
                      56.0057123 0.0767401999 36.2627089 52.4126823'
            />
            <polygon
              points='18.8779504 0.0767401999 27.9984659 23.3704469 35.0204556 53.6522656
                      21.0571886 53.6522656 0.0719319051 0.0767401999'
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
)

LogoWhiteMono.propTypes = {
  height: PropTypes.number,
}

export default LogoWhiteMono
