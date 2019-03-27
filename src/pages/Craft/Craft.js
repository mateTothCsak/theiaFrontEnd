import React, { Component, Fragment } from 'react';
import Navbar from '../../commonComponents/Navbar/Navbar';
import './Craft.css';

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
                <h2 id="craftHeader">You can craft or buy Soul-stones here</h2>
                <p>These stones include one random Sidekick from the chosen material type</p>
                <div className="craftContainer">
                    <div className="stoneContainer">
                        <img src={require ('../../assets/images/clayStone.png')} />
                        <p>Clay Soul</p>
                        <p>50 gold</p>
                        <button>Buy</button>
                    </div>
                    <div className="stoneContainer">
                        <img src={require ('../../assets/images/coalStone.png')} />
                        <p>Coal Soul</p>
                        <p>100 gold</p>
                        <button>Unavailable</button>
                    </div>
                    <div className="stoneContainer">
                        <img src={require ('../../assets/images/limestoneStone.png')} />
                        <p>Limestone Soul</p>
                        <p>300 gold</p>
                        <button>Unavailable</button>
                    </div>
                    <div className="stoneContainer">
                        <img src={require ('../../assets/images/rockStone.png')} />
                        <p>Rock Soul</p>
                        <p>50 gold</p>
                        <button>Buy</button>
                    </div>
                </div>
            </Fragment>
        )
    }

}

export default Craft;
