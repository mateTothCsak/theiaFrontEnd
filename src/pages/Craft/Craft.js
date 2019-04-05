import React, { Component, Fragment } from 'react';
import Navbar from '../../commonComponents/Navbar/Navbar';
import './Craft.css';
import CraftContainer from "./craftElements/CraftContainer";
import PurchasedSidekick from "./craftElements/PurchasedSidekick";
import api from '../../connection/api';

class Craft extends Component {
    constructor(props) {
        super(props);

        let user = this.props.location.state !== undefined ? this.props.location.state : false;

        this.state = {
            user: user,
            showShop: ""
        }
    }

    buyClay = event => {
        this.setState({showShop: "owl"});
        this.state.user.gold-=50
    }


    buyRock = event => {
        this.setState({ showShop: "elephant"});
        this.state.user.gold-=50
    }

    equipLeft = event => {
        this.state.user.leftSidekick = this.state.showShop;
        this.setState({showShop: ""})
        api.post("/craft", {id: this.state.user.id, gold: -50, sidekick: this.state.user.leftSidekick, side: "left"})
            .then(response => {})
            .catch(err => console.log(err));

    }

    equipRight = event => {
        this.state.user.rightSidekick = this.state.showShop;
        this.setState({showShop: ""})
        api.post("/craft", {id: this.state.user.id, gold: -50, sidekick: this.state.user.rightSidekick, side: "right"})
            .then(response => {}).catch(err => console.log(err));
    }




    render() {
        return (
            <Fragment>
                <Navbar pageName="Craft" user={this.state.user}/>
                <h1>Craft</h1>
                <h2 className="centerText increaseSize"> You can craft or buy Soul-stones here</h2>
                <p className="centerText increaseSize">These stones include one random Sidekick from the chosen material type</p>
                {this.state.showShop == "" && <CraftContainer showShop = {this.state.showShop} buyClay={this.buyClay} buyRock={this.buyRock} gold={this.state.user.gold}/>}
                {this.state.showShop && <PurchasedSidekick showShop = {this.state.showShop} equipLeft={this.equipLeft} equipRight={this.equipRight}/>}
            </Fragment>
        )
    }

}

export default Craft;
