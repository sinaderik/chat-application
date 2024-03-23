import React from 'react'
import MyMessage from "../MyMessage/MyMessage"
import TheirMessage from "../TheirMessage/TheirMessage"

export default function ChatFeed(props) {

    const { chats, activeChat, userName, messages } = props
    const chat = chats && chats[activeChat]

    function renderMessage() {
        const keys = Object.keys(messages)
        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessage = index === 0 ? null : keys[index - 1];
            const isMyMessage = userName === message.sender.userName;

            return (
                <div key={`msg_${index}`} style={{ width: "100%" }}>
                    <div className='message-block'>
                        {
                            isMyMessage
                                ? <MyMessage />
                                : <TheirMessage />
                        }
                    </div>
                    <div className='read-receipts' style={{ marginRight: isMyMessage ? "18px" : "0px", marginLeft: isMyMessage ? "0px" : "68px" }}>
                        read-receipts
                    </div>
                </div>
            )

        })
    }

    renderMessage()

    return (
        <div className='chat-feed'>
            <div className='chat-title-container'>
                <div className='chat-title'>
                    {chat?.title}
                </div>
            </div>
        </div>
    )
}
