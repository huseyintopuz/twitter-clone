import React from 'react'
import "./messagewidget.css"

export const MessageWidget = () => {
    return (
        <main className="message-widget">
            <div className="you-width">
                <div className="text-left text-margin">
                    <span className="span-you">
                        You don't have a message selected
                    </span>
                </div>
                <div className="text-left text-margin2">
                    <span className="span-choose">
                        Choose one from your existing messages, or start
                        a new one.
                    </span>
                </div>
                <div className="text-left">
                    <button className="text-left-button" >New Messsage</button>
                </div>
            </div>
            
        </main>
    )
}
