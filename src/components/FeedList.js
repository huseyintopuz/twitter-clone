import React from 'react'
import { FeedItem } from './FeedItem'


export const FeedList = ({displayName, username, verified, text, image, avatar }) => {
    return (
        <div>
            {tweets.map((tweet, index) => (
                <FeedItem {...tweet} key={index} />
            ))}
        </div>
    )
}
