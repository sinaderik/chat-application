import React from 'react'
import "./App.css"
import { ChatEngine } from 'react-chat-engine'

export default function App() {
  return (
    <>
      
      <ChatEngine
        height="100vh"
        projectID="555fa585-9abf-433d-9a6b-77714d75f5c1"
        userName="sina"
        userSecret="123456"
      />

    </>
  )
}
