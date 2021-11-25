import React, { useState } from 'react'
import { MediaIcon, GifIcon, PollIcon, EmojiIcon, ScheduleIcon } from '../icons/Icon';
import "./tweetbox.css";
// import db from "../firebase";
// import firebase from "firebase";

export const Tweetbox = () => {
    // const [content, setContent] = useState("");
    // const sendTweet = (e) => {
    //     e.preventDefault();
    //     if (content !== '') {
    //         db.collection('feed').add({
    //             displayName: "Huseyin Topuz",
    //             username: "@HuseyinTopuz13",
    //             content,
    //             timestamp: firebase.fire
    //             avatar: "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png"
    //         })
    //     }
    // }
    return (
        <div className="tweetbox">
            <textarea
                placeholder="What's happening?" type="text" 
                // onChange={(e) => setContent(e.target.value)} value={content}
            />
            <div className="classdiv0">
                <div className="classdiv1">
                    <div className="classdiv2">
                        <MediaIcon className="light-blue" />
                        <GifIcon className="light-blue" />
                        <PollIcon className="light-blue" />
                        <EmojiIcon className="light-blue" />
                        <ScheduleIcon className="light-blue" />
                        <button className="button" 
                        // onClick={sendTweet}
                         >Tweet</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
