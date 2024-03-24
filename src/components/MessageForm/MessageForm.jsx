import React, { useState } from 'react'
import { isTyping, sendMessage } from 'react-chat-engine'

export default function MessageForm(props) {

  const [value, setValue] = useState('')
  const { chatId, creds } = props

  function handleSubmit(event) {
    event.preventDefault();
    const text = value.trim();
    if (text.length > 0) sendMessage(creds, chatId, { text })

    setValue('')
  }

  function handleChange(event) {
    setValue(event.target.value)
    isTyping(props, chatId);
  }

  return (
    <form className='message-form' onSubmit={handleSubmit}>
      <input
        className='message-input'
        placeholder='Send a message'
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </form>
  )
}
