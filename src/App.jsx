import React from 'react'
import "./App.css"
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed/ChatFeed'
import LoginForm from './components/LoginForm/LoginForm'

export default function App() {

  if (!localStorage.getItem('username')) return <LoginForm />

  return (
    <>

      <ChatEngine
        height="100vh"
        projectID="555fa585-9abf-433d-9a6b-77714d75f5c1"
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />

    </>
  )
}
