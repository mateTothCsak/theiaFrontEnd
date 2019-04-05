import React, { Component, Fragment } from 'react';
import Iframe from "react-iframe";
import Navbar from '../../commonComponents/Navbar/Navbar';
import './Game.css';
import api from '../../connection/api';

class Game extends Component {
    constructor(props) {
        super(props);


        let user = this.props.location.state !== undefined ? this.props.location.state : false;

        this.state = {
            user: user
        }



    }

    componentDidMount() {
        api.post("/startGame", this.state.user.id)
            .then(response => {})
            .catch(err => console.log(err));
    }

    collectRewards = event => {
        api.post("/collectRewards", this.state.user.id)
            .then(response => {
                let userDetails = response.data;
                this.state.user.experience = userDetails.experience;
                this.state.user.gold = userDetails.gold;
            })
            .catch(err => console.log(err));

    }



    render() {
        return (
            <Fragment>
                <Navbar pageName="Game" user={this.state.user}/>
                <h1>Game</h1>
                <div className="gameContainer">
                    <Iframe url="http://localhost/theia/theiagame/index.html"
                            width="480px"
                            height="660px"
                            id="game"
                            display="initial"
                            position="relative"
                            allowFullScreen/>
                    <h2>Move your character by click-and-drag</h2>
                    <button onClick={this.collectRewards}>Collect Rewards</button>
                </div>
            </Fragment>
        )
    }

}

export default Game;
