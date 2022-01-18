import React from 'react'
import { SearchIcon, Settings, Tick } from '../icons/Icon'
import "./notificationwidget.css"

export const NotificationsWidget = () => {
    return (
        <main className="notifications-widget" >
            <div className="notif-widget">
                <div className="div-class2">
                    <SearchIcon className="search" />
                    <input className="input" placeholder="Search Twitter"></input>
                </div>
            </div>

            <div className="trends-for">
                <div className="trend-flex">
                    <div className="title">
                        <span>Trends for you</span>
                    </div>
                    <div className="setset">
                        <Settings />
                    </div>
                </div>
                <div className="width">
                    <div className="flex3">
                        <span className="">Trending in Turkey</span>
                        <div className="column">
                            <div className="circle" />
                            <div className="circle" />
                            <div className="circle" />
                        </div>
                    </div>
                    <div className="flex-column">
                        <span className="large">La Kasa Da Para Yok</span>
                        <span className="">5,635 Tweets</span>
                    </div>
                </div>
                <div className="width">
                    <div className="flex3">
                        <p className="">Trending in Turkey</p>
                        <div className="column">
                            <div className="circle" />
                            <div className="circle" />
                            <div className="circle" />
                        </div>
                    </div>
                    <div className="flex-column">
                        <p className="large">Faiz</p>
                        <p className="">9937 Tweets</p>
                    </div>
                </div>
                <div className="width">
                    <div className="flex3">
                        <p className="">Trending in Turkey</p>
                        <div className="column">
                            <div className="circle" />
                            <div className="circle" />
                            <div className="circle" />
                        </div>
                    </div>
                    <div className="flex-column">
                        <p className="large">#1915ÇanakkaleKöprüsü</p>
                        <p className="">31.2K Tweets</p>
                    </div>
                </div>
                <div className="width">
                    <div className="flex3">
                        <p className="">Trending in Turkey</p>
                        <div className="column">
                            <div className="circle" />
                            <div className="circle" />
                            <div className="circle" />
                        </div>
                    </div>
                    <div className="flex-column">
                        <p className="large">IBAN</p>
                        <p className="  ">15.8K Tweets</p>
                    </div>
                </div>
                <div className="showmore">
                    <p>Show more</p>
                </div>
            </div>

            <div className="follow">
                <div className="span-follow">
                    <span>Who to follow</span>
                </div>
                <div className="flex7">
                    <img className="image" alt="bilgi duragı" src="https://pbs.twimg.com/profile_images/1422239190801129474/fkUyiaXo_400x400.jpg" width='48px' height="48px"></img>
                    <div className="margin-top">
                        <div className="margin-right">
                            <span className="first-span">Bilgi Durağı</span>
                            <span className="second-span">@billgi_durağı</span>
                        </div>
                        <button className="follow-button">Follow</button>
                    </div>
                </div>
                <div className="flex7">
                    <img className="image" alt="Jeff Bezos" src="https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg" width='48px' height="48px"></img>
                    <div className="margin-top">
                        <div className="margin-right">
                            <span className="first-span">Jeff Bezos</span>
                            <span className="second-span">@JeffBezos</span>
                        </div>
                        <button className="follow-button">Follow</button>
                    </div>
                </div>
                <div className="flex7">
                    <img className="image" alt="BillGates" src="https://pbs.twimg.com/profile_images/1414439092373254147/JdS8yLGI_400x400.jpg" width='48px' height="48px"></img>
                    <div className="margin-top">
                        <div className="margin-right">
                            <span className="first-span">Bill Gates</span>
                            <span className="second-span">@BillGates</span>
                        </div>
                        <button className="follow-button">Follow</button>
                    </div>
                </div>
                <div className="flex7">
                    <img className="image" alt="SpaceX" src="https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ_400x400.jpg" width='48px' height="48px"></img>
                    <div className="margin-top">
                        <div className="align">
                            <div className="margin-left">
                                <span className="first-span">SpaceX</span>
                                <Tick color="tick" />
                            </div>
                            <div className="middle">
                                <span className="second-span">@SpaceX</span>
                            </div>
                        </div>
                        <button className="follow-button">Follow</button>
                    </div>
                </div>
                <div className="show-more">Show more</div>
            </div>
            <div className="footer2">
                <nav className="nav-span2">
                    <span>Terms of Service</span>
                    <span>Privacy Policy</span>
                    <span>Cookie Privacy</span>
                </nav>
                <nav className="nav-span2">
                    <span>Imprint</span>
                    <span>Ads info</span>
                    <span>More</span>
                    <div className="flex-more-icon" >
                        <div className="more-icon" />
                        <div className="more-icon" />
                        <div className="more-icon" />
                    </div>
                </nav>
                <div className="inc">
                        <span>2022 Twitter, Inc.</span>
                </div>
            </div>
        </main>
    )
}
