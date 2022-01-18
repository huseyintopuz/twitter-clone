import React from 'react';
import { ExploreContent } from '../link/ExploreContent';
import { ExploreWidget } from '../link/ExploreWidget';
import "./container.css";

export const ExploreContainer = () => {
    
    return (
        <div className="container">
            <ExploreContent />
            <ExploreWidget />
        </div>
    )
}