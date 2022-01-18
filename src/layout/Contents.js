import React, { useEffect, useState } from 'react'
import { TopTweetIcon } from '../icons/Icon';
import {
    collection,
    getDocs,
    addDoc
} from 'firebase/firestore';
import { db } from "../firebase";
import {
    MediaIcon,
    GifIcon,
    PollIcon,
    EmojiIcon,
    ScheduleIcon,
    LikeIcon,
    ReplyIcon,
    RetweetIcon,
    ShareIcon
} from '../icons/Icon';
import "./contents.css";

export const Contents = () => {
    const [posts, setPosts] = useState([])
    const postsCollectionRef = collection(db, "posts")

    const [content, setContent] = useState("")

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getPosts();
    }, []);

    const sendTweet = async () => {
        await addDoc(postsCollectionRef,
            {
                displayName: "Hüseyin TOPUZ",
                userName: "@HuseyinTopuz",
                content,
                avatar: "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
            })
        setContent("")
    }

    return (
        <main className="contents">
            <header>
                <span>Home</span>
                <div className="toptweet">
                    <TopTweetIcon />
                </div>
            </header>
            <aside>
                <div className="condition">
                    <div className="condition-flex">
                        <img alt="Huseyin Topuz" src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png"></img>
                    </div>
                    <div className="classdiv0">
                        <div className="classdiv1">
                            <textarea
                                value={content} onChange={e => setContent(e.target.value)} placeholder="What's happening?" type="text"
                            />
                            <div className="classdiv2">
                                <div>
                                    <div className="size"><MediaIcon className="light-blue" /></div>
                                    <div className="size"><GifIcon className="light-blue" /></div>
                                    <div className="size"><PollIcon className="light-blue" /></div>
                                    <div className="size"><EmojiIcon className="light-blue" /></div>
                                    <div className="size"><ScheduleIcon className="light-blue" /></div>
                                </div>
                                <button className="button" onClick={sendTweet}>Tweet</button>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
            {
                posts.map((post) => {
                    return (
                        <article >
                            <img src={post.avatar} alt="Profile"></img>
                            <div>
                                <div className="divpost">
                                    <div className="post">
                                        <span>{post.displayName}</span>
                                        <span>{post.userName}</span>
                                    </div>
                                    <p className="content">{post.content}</p>
                                </div>
                                <ul className="iconflex">
                                    <li>
                                        <div>
                                            <ReplyIcon />
                                            <span>26</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <RetweetIcon />
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <LikeIcon />
                                            <span>319</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <ShareIcon />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </article>
                    )
                })
            }
        </main >
    )
}

