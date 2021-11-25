import React, { useEffect, useState } from 'react'
import "./contents.css";
import { TopTweetIcon} from '../icons/Icon';
import { Tweetbox } from '../components/Tweetbox';
// import { FeedList } from '../components/FeedList';
// import db from '../firebase';


export const Contents = () => {
    // const [tweets, setTweets] = useState([]);
    // useEffect (() => {
    //     db.collection('feed')
    //     .orderBy('timestamp','desc')
    //     .onSnapshot(snapshot => setTweets(snapshot.docs.map(
    //         doc => doc.data()
    //     )))
    // })

    return (        
        <main>
            <header>
                <span>Home</span>
                <div className="toptweet">
                <TopTweetIcon />
                </div>
            </header>
            <aside>
                <div className="condition">
                    <img alt="Huseyin Topuz" src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png"></img>
                    <Tweetbox />
                </div>
            </aside>
            {/* <FeedList /> */}
        </main>
    )
}

