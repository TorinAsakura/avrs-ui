import React from 'react'
import { StyleSheet } from 'elementum'
import Condition from '../condition/Condition'
import Flags from '../icons/FlagsIcon'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: '"Ubuntu", sans-serif',
    fontWeight: 400,
    lineHeight: 1.2,
    fontSize: '14px',
    color: '#3F4246',
    cursor: 'pointer',
    '& span': {
      marginLeft: '8px',
    },
  },
})

const names = {
  en: 'English',
  ru: 'Русский',
  de: 'Deutsch',
}

const Lang = ({ name, short, width = 18 }) => (
  <div className={styles()}>
    <Flags
      name={name}
      width={width}
    />
    <Condition match={!short}>
      <span>
        {names[name]}
      </span>
    </Condition>
  </div>
)

export default Lang
