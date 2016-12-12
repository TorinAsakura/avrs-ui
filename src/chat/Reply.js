import React from 'react'
import { Column, Layout } from 'flex-layouts'
import Textarea from 'react-textarea-autosize'
import { StyleSheet } from 'elementum'
import Send from './Send'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    resize: 'none',
    boxSizing: 'border-box',
    background: 'transparent',
    boxShadow: 'none',
    borderWidth: '0px',
    appearance: 'none',
    outline: 'none',
    color: '#505458',
    fontFamily: '"Ubuntu", sans-serif',
    fontSize: '14px',
    lineHeight: '18px',
    '&::-webkit-input-placeholder': {
      color: '#778997',
      fontSize: '15px',
    },
  },
})

const handleKeyPress = (event, onSend) => {
  if (!event.shiftKey && event.charCode === 13) {
    event.preventDefault()

    if (onSend) {
      onSend()
    }
  }
}

const Reply = ({ value, placeholder, onChange, onSend }) => (
  <Column align='center'>
    <Layout basis='25px' />
    <Layout grow={1}>
      <Textarea
        className={styles()}
        value={value}
        placeholder={placeholder}
        onChange={({ target }) => onChange && onChange(target.value)}
        onKeyPress={event => handleKeyPress(event, onSend)}
      />
    </Layout>
    <Layout basis='25px' />
    <Layout>
      <Send
        onClick={onSend}
      />
    </Layout>
    <Layout basis='25px' />
  </Column>
)

export default Reply
