import React from 'react'
import { Timeline, Share } from 'react-twitter-widgets'
import "./widgets.css"
import { SearchIcon } from '../icons/Icon'

export const Widgets = () => {

    return (
        <div className="mywidgets">
            <div className="divarama">
                <div className="arama">
                    <SearchIcon className="search" />
                    <input className="input" placeholder="Search Twitter"></input>
                </div>
            </div>
            <h1>
                <Timeline
                    dataSource={{
                        sourceType: 'profile',
                        screenName: 'reactjs'
                    }}
                    options={{
                        height: '700'
                    }}
                />
                <div className="share">
                    <Share
                        url={"https://www.facebook.com/huseyin.topuz.9847"}
                        options={{ hashtags: "reactjs is awesome" }}
                    />
                </div>

            </h1>
        </div>
    )
}
