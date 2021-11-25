import React from 'react'
import { NotificationsContent } from '../link/NotificationsContent'
import { NotificationsWidget } from '../link/NotificationsWidget'
import "./contentwidget.css"

export const ContentWidget = () => {
    return (
        <div className="content-widget">
            <NotificationsContent />
            <NotificationsWidget />
        </div>
    )
}

