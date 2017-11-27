import React from 'react'
import { connect, toggle } from '../state'
import Condition from '../condition/Condition'
import Layer from '../layer/Layer'
import Dropdown from './Dropdown'
import Lang from './Lang'

const Locale = ({ current = 'en', short, toggled, onChange, onClick }) => (
  <div style={{ display: 'inline-flex' }}>
    <div onClick={onClick}>
      <Lang
        width={20}
        short={short}
        name={current}
      />
    </div>
    <Condition match={toggled}>
      <Layer
        align='tc-bc'
        offset='-16px 0px'
        onOutsideClick={onClick}
      >
        <Dropdown
          onChange={(value) => {
            onClick()
            onChange(value)
          }}
        />
      </Layer>
    </Condition>
  </div>
)

export default connect([toggle], Locale)
