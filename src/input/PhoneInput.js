/* eslint-disable global-require */
import React from 'react'
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment'
import ReactTelephoneInput from 'react-telephone-input'

let flags = null

if (canUseDOM) {
  require('react-telephone-input/css/default.css')
  require('./PhoneInput.css')
  flags = require('./flags.png')
}

const PhoneInput = ({ value, defaultCountry = 'ru', onChange }) => (
  <ReactTelephoneInput
    value={value}
    defaultCountry={defaultCountry}
    flagsImagePath={flags}
    onChange={onChange}
  />
)

export default PhoneInput
