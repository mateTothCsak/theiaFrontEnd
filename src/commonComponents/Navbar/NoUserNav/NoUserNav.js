import React from 'react'
import {Link} from "react-router-dom";



const NoUserNav = (props) => {

    return(
        <ul className="navBar">
            <li className="navItem" id='logo'><Link to={{pathname: '/', state: props.user}}>Theia Online</Link></li>
            <li className="navItem"id='pageName'>{props.pageName}</li>
            <li className="navItem"><Link to={{pathname: '/registration', state: props.user}}>Register</Link></li>
            <li className="navItem"><Link to={{pathname: '/login', state: props.user}}>Log In</Link></li>
            <li className="navItem"><Link to={{pathname: '/encyclopedia', state: props.user}}>Encyclopedia</Link></li>
        </ul>
    )
};

export default NoUserNav;