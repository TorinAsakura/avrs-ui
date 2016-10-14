/* eslint-disable max-len */
import React, { PropTypes } from 'react'
import { getSize } from './utils'

const LogoWhite = ({ height = 88 }) => (
  <svg {...getSize(height, (100 / 54))} viewBox='0 0 100 54'>
    <g
      fill='none'
      stroke='none'
      strokeWidth='1'
      fillRule='evenodd'
    >
      <g transform='translate(-98.000000, -320.000000)'>
        <g transform='translate(98.000000, 319.000000)'>
          <g>
            <g>
              <g transform='translate(43.966828, 1.466189)'>
                <polygon
                  fill='#FFFFFF'
                  points='18.7704881 0.0763991324 27.8390851 23.2665783 20.937321 53.4138111 0.0715224341 0.0763991324'
                />
                <polygon
                  fill='#CDE0EF'
                  points='27.8390851 23.2665783 36.9879353 0.0763991324 55.6869009 0.0763991324
                          34.8211023 53.4138111 20.937321 53.4138111'
                />
              </g>
              <g transform='translate(28.000000, 27.611589) scale(1, -1) translate(-28.000000, -27.611589) translate(0.000000, 0.611589)'>
                <polygon
                  fill='#CDE0EF'
                  points='23.4627369 13.2692594 36.9879353 0.0763991324 55.6869009 0.0763991324 34.8211023 53.4138111'
                />
                <polygon
                  fill='#FFFFFF'
                  points='18.7704881 0.0763991324 27.8390851 23.2665783 34.8211023 53.4138111
                          20.937321 53.4138111 0.0715224341 0.0763991324'
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
)

LogoWhite.propTypes = {
  height: PropTypes.number,
}

export default LogoWhite
