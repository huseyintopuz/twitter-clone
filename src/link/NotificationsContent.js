import React from 'react'
import { Bell, Recommend, Settings } from '../icons/Icon'
import "./notificationscontent.css"

export const NotificationsContent = () => {
    return (
        <main className="notifications">
            <div className="div-size">
                <div className="div-border">
                    <div className="div-notifi">
                        <div className="notifi">
                            <span className="name">Notifications</span>
                        </div>
                        <div className="seticon">
                            <Settings />
                        </div>
                    </div>
                    <div className="div-notifii">
                        <div className="all">
                            <span className="name2">All</span>
                            <div className="underline" />
                        </div>
                        <div className="mentions">
                            <span className="name3">Mentions</span>
                        </div>
                    </div>
                </div>

                <div className="div-bottom">
                    <div className="div-notifi2">
                        <div className="bell">
                            <Bell />
                            <img src="https://pbs.twimg.com/profile_images/1368621123118698501/jV3zYA_U_400x400.jpg" alt="Tunç" width="32px" height="32px"></img>
                            <img src="https://pbs.twimg.com/profile_images/479236154911232001/l0t8qh0i_400x400.jpeg" alt="şant" width="32px" height="32px"></img>
                        </div>
                        <div className="div-span">
                            <span className="margin-rig font">New Tweet notifications for</span>
                            <span className="margin-rig font2">Tunç Şatıroğlu</span>
                            <span className="margin-rig font">and</span>
                            <span className="font2">Şant Manukyan</span>
                        </div>
                    </div>
                </div>

                <div className="recommend">
                    <div className="recommend-icon">
                        <Recommend />
                    </div>
                    <div className="recommend2">
                        <div className="recommend3">
                            <div className="recommend-image">
                                <img src="https://pbs.twimg.com/profile_images/1308717657441607682/jdh2N6_d_400x400.jpg" alt="pelin" width="32px" height="32px"></img>
                            </div>
                            <div className="circle-flex">
                                <div className="circle-recom" />
                                <div className="circle-recom" />
                                <div className="circle-recom" />
                            </div>
                        </div>
                        <div className="div-rec">
                            <span className="rec">Recommended For You</span>
                            <span className="agı">Ağzımda gümüş kaşıkla doğmadım, dedem fakir bir öğrenci olarak Atatürk’ün bursuyla yurtdışına gitti profesör oldu, babam çok çalışıp okulunu birincilikle bitirip devlet memuru oldu. Ben ise 18 yaşımdan beri çalışıyorum.</span>
                        </div>
                    </div>

                </div>
            </div>

        </main>
    )
}
