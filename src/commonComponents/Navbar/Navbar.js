import React, { Component, Fragment } from 'react';
import './Navbar.css';
import LoggedInNav from "./LoggedInNav/LoggedInNav";
import NoUserNav from "./NoUserNav/NoUserNav";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageName: "| " + props.pageName,
            user: props.user
        }
    }

    renderNavconent(){
        if(this.state.user === false){
            return <NoUserNav pageName={this.state.pageName} user={this.state.user}/>
        } else {
            return <LoggedInNav pageName={this.state.pageName} user={this.state.user}/>
        }
    }

    render() {
        return (
            <Fragment>
                <img src={require ('../../assets/images/indexBanner.png')}/>
                <div>
                    {this.renderNavconent()}
                </div>
            </Fragment>
        )
    }

}

export default Navbar;
