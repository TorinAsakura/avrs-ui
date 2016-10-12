import React, { PropTypes } from 'react'
import { StyleSheet } from 'elementum'
import SelectedHour from './SelectedHour'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    height: '20px',
    borderRight: '1px solid #e2e2e2',
    borderBottom: '1px solid #e2e2e2',
    boxSizing: 'border-box',
    position: 'relative',
  },
  first: {
    borderTop: '1px solid #e2e2e2',
  },
  firstDay: {
    borderLeft: '1px solid #e2e2e2',
  },
})

const Hour = ({ value, selected, first, firstDay, onClick, onMouseDown }) => (
  <div
    className={styles({ first, firstDay })}
    onClick={event => onClick(event, value)}
    onMouseDown={event => onMouseDown(event, value)}
  >
    {selected && <SelectedHour />}
  </div>
)

Hour.propTypes = {
  value: PropTypes.string,
  selected: PropTypes.bool,
  first: PropTypes.bool,
  firstDay: PropTypes.bool,
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
}

export default Hour
