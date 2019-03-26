import React, { Component, Fragment } from 'react';
import Navbar from '../../commonComponents/Navbar/Navbar';

class Craft extends Component {
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
                <Navbar pageName="Craft" user={this.state.user}/>
                <p>Craft page coming here</p>
            </Fragment>
        )
    }

}

export default Craft;
