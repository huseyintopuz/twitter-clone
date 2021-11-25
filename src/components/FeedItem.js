import React from 'react'
import { LikeIcon, ReplyIcon, RetweetIcon, ShareIcon } from '../icons/Icon'

export const FeedItem = ({avatar,content,displayName,image,timestamp,username}) => {
    return (
        <article>
            <img src={avatar} alt="Profile"></img>
            <div>
                <div>
                    <h4>{displayName}</h4>
                    <span>{username}</span>
                    <div className="dot" />
                    <span >{timestamp?.toDate().toLocaleTimeString("tr-TR")}</span>
                </div>
                <p>{content}</p>
                {image && <img src={image} alt="" />}
                <ul>
                    <li>
                        <div>
                            <ReplyIcon />
                        </div>
                    </li>
                    <li>
                        <div>
                            <RetweetIcon />
                        </div>
                    </li><li>
                        <div>
                            <LikeIcon />
                        </div>
                    </li><li>
                        <div>
                            <ShareIcon />
                        </div>
                    </li>
                </ul>
            </div>
        </article>
    )
}
