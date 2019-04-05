import React from 'react'
import {Link} from "react-router-dom";



const LoggedInNav = (props) => {

    return(
        <ul className="navBar">
            <li className="navItem" id='logo'><Link to={{pathname: '/', state: props.user}}>Theia Online</Link></li>
            <li className="navItem" id='pageName'>{props.pageName}</li>
            <li className="navItem"><Link to={{pathname: '/logout' }}>Log Out</Link></li>
            <li className="navItem"><Link to={{pathname: '/profile', state: props.user}}>Profile</Link></li>
            <li className="navItem"><Link to={{pathname: '/encyclopedia', state: props.user}}>Encyclopedia</Link></li>
            <li className="navItem"><Link to={{pathname: '/craft', state: props.user}}>Craft</Link></li>
            <li className="navItem"><Link to={{pathname: '/game', state: props.user}}>Game</Link></li>
            <li className="navItem" id='pageName'>{props.user.userName} |</li>
        </ul>
    )
};

export default LoggedInNav;