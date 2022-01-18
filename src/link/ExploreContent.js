import React from 'react'
import { Settings } from '../icons/Icon'
import { SearchIcon } from '../icons/Icon'
import './explore.css'

export const ExploreContent = () => {
    return (
        <main className="explore">
            <div className="div-class5">
                <div className="div-class6">
                    <SearchIcon className="search" />
                    <input className="input5" placeholder="Search Twitter"></input>
                </div>
                <div className="setting">
                    <Settings />
                </div>
            </div>
            <div className="news">
                <img className="img" src="https://pbs.twimg.com/semantic_core_img/1455293923312603138/MKAbWWP6?format=jpg&name=small" width="100%" height="336px" alt="news" />
                <div className="speech">
                    <span className="first">World News . LIVE</span>
                    <span className="second">At least 16 UN staffers detained in Ethiopia’s capital as nation's yearslong civil conflict escalates</span>
                </div>
            </div>
            <div className="border" />
            <div className="lefttt title">
                <p className="lacasa3">Trends for you</p>
            </div>
            <div className="left hover">
                <div className="flex5">
                    <p className="lacasa">Trending in Turkey</p>
                    <div className="flex5 right-circle">
                        <div className="circle" />
                        <div className="circle" />
                        <div className="circle" />
                    </div>
                </div>
                <p className="lacasa2 margin-top bold">La Kasa Da Para Yok</p>
                <p className="lacasa marginTop">5,635 Tweets</p>
            </div>
            <div className="left hover">
                <div className="flex5">
                    <p className="lacasa">Trending in Turkey</p>
                    <div className="flex5 right-circle">
                        <div className="circle" />
                        <div className="circle" />
                        <div className="circle" />
                    </div>
                </div>
                <p className="lacasa2 margin-top bold">Faiz</p>
                <p className="lacasa marginTop">9937 Tweets</p>
            </div>
            <div className="left hover">
                <div className="flex5">
                    <p className="lacasa">Trending in Turkey</p>
                    <div className="flex5 right-circle">
                        <div className="circle" />
                        <div className="circle" />
                        <div className="circle" />
                    </div>
                </div>
                <p className="lacasa2 margin-top bold">#1915ÇanakkaleKöprüsü</p>
                <p className="lacasa marginTop">31.2K Tweets</p>
            </div>
            <div className="left hover">
                <div className="flex5">
                    <p className="lacasa">Trending in Turkey</p>
                    <div className="flex5 right-circle">
                        <div className="circle" />
                        <div className="circle" />
                        <div className="circle" />
                    </div>
                </div>
                <p className="lacasa2 margin-top bold">IBAN</p>
                <p className="lacasa marginTop">15.8K Tweets</p>
            </div>
            <div className="showmore">
                <p>Show more</p>
            </div>
        </main>
    )
}
