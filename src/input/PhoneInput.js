import React from 'react'
import ReactTelephoneInput from 'react-telephone-input'
import 'react-telephone-input/css/default.css'
import './PhoneInput.css'
import flags from './flags.png'

const PhoneInput = ({ value, defaultCountry = 'ru', onChange }) => (
  <ReactTelephoneInput
    value={value}
    defaultCountry={defaultCountry}
    flagsImagePath={flags}
    onChange={onChange}
  />
)

export default PhoneInput
