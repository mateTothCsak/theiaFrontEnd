import React, { Component, Fragment } from 'react';
import Navbar from '../../commonComponents/Navbar/Navbar';
import './Encyclopdia.css';
import Characters from "./bookElements/Characters";
import Sidekicks from "./bookElements/Sidekicks";
import Materials from "./bookElements/Materials";

class Encyclopedia extends Component {
    constructor(props) {
        super(props);

        let user = this.props.location.state !== undefined ? this.props.location.state : false;

        this.state = {
            user: user,
        }
    }

    toggleSelected() {

    }


    render() {
        return (
            <Fragment>
                <Navbar pageName="Encyclopedia" user={this.state.user}/>
                <h1>Encyclopedia</h1>
                <div className="encyclopediaContainer">
                    <ul className="encyclopediaBar">
                        <li>Minerals</li>
                        <li>Sidekicks</li>
                        <li>Characters</li>
                    </ul>
                    <Characters />
                    <Sidekicks />
                    <Materials/>
                </div>

            </Fragment>
        )
    }

}

export default Encyclopedia;