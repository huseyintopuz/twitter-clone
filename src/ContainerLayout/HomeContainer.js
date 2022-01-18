import React from 'react';
import { Contents } from '../layout/Contents';
import { Widgets } from '../layout/Widgets';
import "./container.css";

export const HomeContainer = () => {
    
    return (
        <div className="container">
            <Contents />
            <Widgets />
        </div>
    )
}
