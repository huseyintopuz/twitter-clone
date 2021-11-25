import React from 'react'
import './sidelink.css'

export const SideLink = ({ name, Icon, active }) => {

    return (
        <li className="listyle">
            <a href="#">
                <div style={{ display: 'inline-block' }}>
                    <div className={`changeColor ${active && 'changeColor--active'}`}>
                        <Icon active />
                        <span className="span-style">
                            {name}
                        </span>
                    </div>
                </div>
            </a>
        </li>
    )
}
