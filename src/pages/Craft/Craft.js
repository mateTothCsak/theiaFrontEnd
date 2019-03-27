import React, { Component, Fragment } from 'react';
import Navbar from '../../commonComponents/Navbar/Navbar';
import './Craft.css';
import CraftContainer from "./craftElements/CraftContainer";

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
                <h1>Craft</h1>
                <h2 className="centerText increaseSize"> You can craft or buy Soul-stones here</h2>
                <p className="centerText increaseSize">These stones include one random Sidekick from the chosen material type</p>
                <CraftContainer/>
            </Fragment>
        )
    }

}

export default Craft;
