import React, { Component, Fragment } from 'react';
import Navbar from '../../commonComponents/Navbar/Navbar';

class Encyclopedia extends Component {
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
                <Navbar pageName="Encyclopedia" user={this.state.user}/>

            </Fragment>
        )
    }

}

export default Encyclopedia;