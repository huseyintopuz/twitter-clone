import React from 'react';
import { NotificationsContent } from '../link/NotificationsContent';
import { NotificationsWidget } from '../link/NotificationsWidget';
import "./container.css";

export const NotificationsContainer = () => {
    
    return (
        <div className="container">
            <NotificationsContent />
            <NotificationsWidget />
        </div>
    )
}