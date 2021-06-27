import React from 'react'

import '../Header/styles.css'

import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';

export function Header({black}) {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <img src="https://webraga.pt/wp-content/uploads/2020/04/we-braga-netflix-1.png" alt="LOGO"/>
                <ul>
                    <li>Início</li>
                    <li>Séries</li>
                    <li>Filmes</li>
                    <li>Bombando</li>
                    <li>Minha lista</li>
                </ul>
            </div>
            <div className="header--user">
                <SearchIcon style= {{marginRight: '25px', cursor: 'pointer',}}/>
                <p>INFANTIL</p>
                <NotificationsIcon style= {{marginRight: '25px', cursor: 'pointer',}} />
                <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"/>
            </div>
    </header>
    )
}

