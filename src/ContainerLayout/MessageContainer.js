import React from 'react';
import { MessageContent } from '../link/MessageContent';
import { MessageWidget } from '../link/MessageWidget';
import "./container.css";

export const MessageContainer = () => {
    
    return (
        <div className="container">
            <MessageContent />
            <MessageWidget />
        </div>
    )
}