import React, { Component, Fragment } from 'react';
import classes from './Navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageName: "| " + props.pageName
        }
    }

    render() {
        return (
            <Fragment>
                <img src={require ('../../assets/images/indexBanner.png')}/>
                <div>
                    <ul>
                        <li id='logo'><a href="/">Theia Online</a></li>
                        <li id='pageName'>{this.state.pageName}</li>
                        <li><a href="/registration">Register</a></li>
                        <li><a href="contact.asp">Log In</a></li>
                        <li><a href="news.asp">Encyclopedia</a></li>
                    </ul>
                </div>
            </Fragment>
        )
    }

}

export default Navbar;
