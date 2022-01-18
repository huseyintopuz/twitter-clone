import React, { useState, useEffect } from 'react'
import { MediaIcon, GifIcon, PollIcon, EmojiIcon, ScheduleIcon } from '../icons/Icon';
import "./tweetbox.css";
import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc
} from 'firebase/firestore';
import { db } from "../firebase";

export const Tweetbox = () => {

    const [text, setText] = useState("")    

    const postsCollectionRef = collection(db, "posts")

    const sendTweet = async () => {
        await addDoc(postsCollectionRef,
            {
                displayName: "HuseyinTopuz",
                userName: "Hüseyin TOPUZ",
                text,
                avatar: "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png"    
            })
        setText("")
    }
    
    return (
        <div className="tweetbox">
            <textarea
                value={text} onChange={e => setText(e.target.value)} placeholder="What's happening?" type="text"
            />
            <div className="classdiv0">
                <div className="classdiv1">
                    <div className="classdiv2">
                        <MediaIcon className="light-blue" />
                        <GifIcon className="light-blue" />
                        <PollIcon className="light-blue" />
                        <EmojiIcon className="light-blue" />
                        <ScheduleIcon className="light-blue" />
                        <button className="button" onClick={sendTweet}
                        // onClick={sendTweet}
                        >Tweet</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
