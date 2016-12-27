import React from 'react'
import moment from 'moment'
import DayPicker from 'react-day-picker'
import { StyleSheet } from 'elementum'
import MomentLocaleUtils from 'react-day-picker/moment'
import 'react-day-picker/lib/style.css'

const styles = StyleSheet.create({
  self: {
    background: '#ffffff',
    fontFamily: '"Ubuntu", sans-serif',
    '& .DayPicker': {
      outline: 'none',
      padding: '0px',
    },
    '& .DayPicker-NavBar': {
      padding: '0px',
      '& .DayPicker-NavButton--prev': {
        left: '4px',
      },
      '& .DayPicker-NavButton--next': {
        right: '4px',
      },
    },
    '& .DayPicker-Month': {
      margin: '0px',
      '&:last-child': {
        marginLeft: '32px',
      },
    },
    '& .DayPicker-Caption': {
      fontSize: '14px',
      fontWeight: 300,
    },
    '& .DayPicker-NavButton': {
      width: '14px',
      height: '14px',
    },
    '& .DayPicker-Weekday': {
      padding: '4px 8px 4px 8px',
      position: 'relative',
      '& abbr': {
        textDecoration: 'none',
        color: '#a3a2a3',
        textTransform: 'uppercase',
        fontSize: '11px',
        fontWeight: 400,
      },
      '&:before': {
        content: '" "',
        position: 'absolute',
        right: 0,
        bottom: 0,
        left: 0,
        borderTop: '1px solid #efefef',
      },
    },
    '& .DayPicker-Week': {
      padding: '1px 0',
    },
    '& .DayPicker-Day': {
      padding: '8px',
      borderWidth: '0px',
      fontSize: '13px',
      fontWeight: 400,
      color: '#757575',
      outline: 'none',
      position: 'relative',
      borderTop: '2px solid #ffffff',
      '&:hover': {
        '&:before': {
          content: '" "',
          position: 'absolute',
          top: '1px',
          right: '1px',
          bottom: '1px',
          left: '1px',
          border: '1px solid #0288d1',
          borderRadius: '50%',
          boxSizing: 'border-box',
          width: '29px',
          height: '29px',
        },
      },
    },
    '& .DayPicker-Day--selected:not(.DayPicker-Day--outside)[tabindex="0"]': {
      borderRadius: '6px 0 0  6px',
    },
    '& .DayPicker-Day--selected:first-child:not(.DayPicker-Day--outside)': {
      borderRadius: '6px 0 0  6px',
    },
    '& .DayPicker-Day--selected:last-child:not(.DayPicker-Day--outside)': {
      borderRadius: '0 6px 6px 0',
    },
    '& .DayPicker-Day--from': {
      borderRadius: '6px 0 0 6px',
    },
    '& .DayPicker-Day--to': {
      borderRadius: '0 6px 6px 0',
    },
    '& .DayPicker-Day--selected': {
      fontWeight: 400,
      backgroundColor: 'rgba(48, 144, 236, 0.95) !important',
      '&.DayPicker-Day': {
        '&:hover': {
          '&:before': {
            border: '1px solid transparent',
            backgroundColor: 'transparent',
          },
        },
      },
      '&.DayPicker-Day--outside': {
        backgroundColor: '#ffffff !important',
      },
    },
    '& .DayPicker--interactionDisabled .DayPicker-Day': {
      '&:hover': {
        '&:before': {
          borderColor: 'transparent',
        },
      },
    },
    '& .DayPicker-Day--outside': {
      '&.DayPicker-Day': {
        '&:hover': {
          '&:before': {
            borderColor: 'transparent',
          },
        },
      },
    },
  },
  external: {
    padding: '10px',
    border: '1px solid #e5e5e5',
    background: '#ffffff',
    borderRadius: '3px',
    '& .DayPicker-Month': {
      margin: '0px',
      '&:last-child': {
        marginLeft: '0px',
      },
    },
  },
})

const Calendar = ({ external, ...props }) => (
  <div className={styles({ external })}>
    <DayPicker
      {...props}
      locale={moment.locale()}
      localeUtils={MomentLocaleUtils}
    />
  </div>
)

export default Calendar
