import React from 'react'
import {Link} from "react-router-dom";



const LoggedInNav = (props) => {

    return(
        <ul>
            <li id='logo'><Link to={{pathname: '/', state: props.user}}>Theia Online</Link></li>
            <li id='pageName'>{props.pageName}</li>
            <li><Link to={{pathname: '/' }}>Log Out</Link></li>
            <li><Link to={{pathname: '/encyclopedia', state: props.user}}>Encyclopedia</Link></li>
            <li><Link to={{pathname: '/craft', state: props.user}}>Craft</Link></li>
            <li><Link to={{pathname: '/game', state: props.user}}>Game</Link></li>
            <li id='pageName'>{props.user.userName}</li>

        </ul>
    )
};

export default LoggedInNav;