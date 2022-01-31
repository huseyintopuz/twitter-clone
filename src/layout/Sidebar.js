import React from 'react'
import {NavLink} from 'react-router-dom'
import { SideLink } from '../components/SideLink';
import { Twitter, HomeIcon, ExploreIcon, NotificationsIcon, MessagesIcon, ProfileIcon, MoreIcon } from '../icons/Icon'
import './sidebar.css';

const sideLinks = [
    {
        name: 'Home',
        icon: HomeIcon,
    },
    {
        name: 'Explore',
        icon: ExploreIcon,
    },
    {
        name: 'Notifications',
        icon: NotificationsIcon,
    },
    {
        name: 'Messages',
        icon: MessagesIcon,
    },
    {
        name: 'Profile',
        icon: ProfileIcon,
    },
    {
        name: 'More',
        icon: MoreIcon,
    }
];

export const Sidebar = () => {

    return (
        <div className="mysidebar">
            <div className="fixed">
                <div >
                    <div className="tweethover">
                        <Twitter />
                    </div>
                    <nav>
                        <ul style={{ paddingLeft: 0 }}>

                            {sideLinks.map(({ name, icon }) => (
                                <NavLink active key={name} to={`/${name.toLowerCase()}`} className='span-style' activeClassName='span-style-active'>
                                    <SideLink key={name} name={name} Icon={icon} />
                                </NavLink>
                            ))}

                        </ul>
                    </nav>
                    <button className="enes">
                        Tweet
                    </button>
                </div>
                <div className="aysima">
                    <img className="foto" alt="Huseyin Topuz" src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png"></img>
                    <div className="bottom">
                        <span className="span-style2">
                            Huseyin Topuz
                        </span>
                        <span className="span-style3">
                            @HuseyinTopuz13
                        </span>
                    </div>
                    <div className="dot">
                        <div style={{ background: 'rgb(15, 20, 25)', width: 3, height: 3, borderRadius: '9999px', }}></div>
                        <div style={{ background: 'rgb(15, 20, 25)', width: 3, height: 3, borderRadius: '9999px', marginLeft: 2 }}></div>
                        <div style={{ background: 'rgb(15, 20, 25)', width: 3, height: 3, borderRadius: '9999px', marginLeft: 2 }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}