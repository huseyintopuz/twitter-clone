import React from 'react';
import "./container.css";

export const Container = ({ children }) => {
    
    return (
        <div className="my-container">
            {children}
        </div>
    )
}
