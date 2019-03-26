import React, { Component, Fragment } from 'react';
import Navbar from '../../commonComponents/Navbar/Navbar';

class Profile extends Component {
    constructor(props) {
        super(props);

        let user = this.props.location.state !== undefined ? this.props.location.state : false;

        this.state = {
            user: user
        }
    }

    render() {
        return (
            <Fragment>
                <Navbar pageName="Profile" user={this.state.user}/>
                <p>Profile coming here</p>
            </Fragment>
        )
    }

}

export default Profile;
