import React from 'react'
import "./explorewidget.css"
import { Tick } from '../icons/Icon'

export const ExploreWidget = () => {
    return (
        <main className="explorewidget">
            <div className="follow">
                <div className="span-follow">
                    <span>Who to follow</span>
                </div>
                <div className="flex">
                    <img className="image" alt="bilgi duragı" src="https://pbs.twimg.com/profile_images/1422239190801129474/fkUyiaXo_400x400.jpg" width='48px' height="48px"></img>
                    <div className="margin-top">
                        <div className="margin-right">
                            <span className="first-span">Bilgi Durağı</span>
                            <span className="second-span">@billgi_durağı</span>
                        </div>
                        <button className="follow-button">Follow</button>
                    </div>

                </div>
                <div className="flex">
                    <img className="image" alt="Jeff Bezos" src="https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg" width='48px' height="48px"></img>
                    <div className="margin-top">
                        <div className="margin-right">
                            <span className="first-span">Jeff Bezos</span>
                            <span className="second-span">@JeffBezos</span>
                        </div>
                        <button className="follow-button">Follow</button>
                    </div>
                </div>
                <div className="flex">
                    <img className="image" alt="BillGates" src="https://pbs.twimg.com/profile_images/1414439092373254147/JdS8yLGI_400x400.jpg" width='48px' height="48px"></img>
                    <div className="margin-top">
                        <div className="margin-right">
                            <span className="first-span">Bill Gates</span>
                            <span className="second-span">@BillGates</span>
                        </div>
                        <button className="follow-button">Follow</button>
                    </div>
                </div>
                <div className="flex">
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
            <div className="footer">
                <nav className="nav-span">
                    <span>Terms of Service</span>
                    <span>Privacy Policy</span>
                    <span>Cookie Privacy</span>
                </nav>
                <nav className="nav-span">
                    <span>Imprint</span>
                    <span>Ads info</span>
                    <span>More</span>
                    <div className="flex-more-icon" >
                        <div className="more-icon" />
                        <div className="more-icon" />
                        <div className="more-icon" />
                    </div>
                    <div className="inc">
                        <span>2021 Twitter, Inc.</span>
                    </div>
                </nav>
            </div>
        </main>
    )
}
//
// 
// 
// https://pbs.twimg.com/profile_images/1321163587679784960/0ZxKlEKB_400x400.jpg