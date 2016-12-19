import React, { PropTypes } from 'react'
import { StyleSheet } from 'elementum'
import SelectedHour from './SelectedHour'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    borderLeft: '1px solid #f2f2f2',
    borderTop: '1px solid #ffffff',
    boxSizing: 'border-box',
    position: 'relative',
    height: '100%',
    width: '100%',
    cursor: 'pointer',
  },
})

const Hour = ({ value, selected, active, color, onClick }) => (
  <div
    className={styles({ selected })}
    onClick={event => onClick(event, value)}
  >
    {selected && <SelectedHour active={active} color={color} />}
  </div>
)

Hour.propTypes = {
  value: PropTypes.string,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Hour
