import React from 'react'
import { Message, Settings } from '../icons/Icon'
import "./messagecontent.css"

export const MessageContent = () => {
    return (
        <main className="main">
            <div className="message-content">
                <div className="messages">
                    <h2>
                        <span>Messages</span>
                    </h2>
                </div>
                <div className="sets-mess">
                    <div className="sets">
                        <Settings />
                    </div>
                    <div className="mess">
                        <Message />
                    </div>
                </div>
            </div>
            <div className="send">
                <div className="span-send">
                    <span>
                        Send a message, get a message
                    </span>
                </div>
                <div className="span-span">
                    <span>
                        Direct Messages are private conversations
                        between you and other people on Twitter. Share
                        Tweets, media, and more!
                    </span>
                </div>
                <div className="start">
                    <button className="button-start">Start a conversation</button>
                </div>
            </div>      
        </main>
    )
}
