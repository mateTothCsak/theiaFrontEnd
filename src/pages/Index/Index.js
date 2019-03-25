import React, { Component, Fragment } from 'react';
import Navbar from '../../commonComponents/Navbar/Navbar';
import classes from './Index.css';
import {Link} from "react-router-dom";

class Index extends Component {
    constructor(props) {
        super(props);

        let user = this.props.location.state !== undefined ? this.props.location.state : false;
        console.log(user);

        this.state = {
            user: user
        }
    }

    render() {
        return (
            <Fragment>
                <Navbar pageName="Main page" user={this.state.user}/>
                <h1>Welcome to Theia Online!</h1>
                <div className="textArea1">
                    <div>
                        <h2 className="centerText">This is Theia</h2>
                        <p>Our world is filled with magic and adventure, yet the people of Theia prefer a rather calm life.<br/>
                            For this reason we are looking for heroes, wanderers and all kind of free spirits who are willing to risk their lives
                            in exchange for pride and wealth in this county.
                        </p>
                        <h3>Sounds like a job for you?</h3>
                        <p>Join us Today and be a Maverick of the realm!</p>
                    </div>
                    <img src="http://www.necropraxis.com/wp-content/uploads/2015/07/final-fantasy-legends-the-space-time-crystal-copy.jpg"/>
                </div>
                <div className="textArea2">
                    <img src="https://i.pinimg.com/originals/6d/f4/c5/6df4c53b832bdf0c7a45700925d26541.jpg"/>
                    <div>
                        <h2>About the game</h2>
                        <p>Theia is a HTML5 based shoot em up game, with a lot of RPG elements and supposedly a player driven economy. It is being developed using the Phaser JS framework.
                            As of now the game is still in early development stage, using placeholder visuals and temporary audio.
                        </p>
                        <h3>Gameplay</h3>
                        <p>Your goal in this game is to be the greatest Maverick of 'em all. Collect sidekicks, get stronger and
                        fight stronger and stronger bosses for even more loot.  </p>
                    </div>
                </div>
                <div className="textArea1">
                    <div>
                        <h2>Love Theia so far?</h2>
                        <p>If you would like to learn more about the world this game plays in feel free to visit
                            <Link className="nonDecoratedLink" to={{pathname: '/encyclopedia', state: this.state.user}}> the Encyclopedia</Link></p>
                        <p>In case you wish to support our project you can contribute to Theia with:</p>
                        <ul>
                            <li>Images / Sprites / Art</li>
                            <li>Music and Sound effects</li>
                            <li>Game design ideas</li>
                        </ul>
                        <p>For further information please contact me under</p>
                        <h2 className="centerText">tothcsakmate@gmail.com</h2>
                    </div>
                    <img src="https://i.pinimg.com/originals/29/f6/a2/29f6a2ca54e56787e555e80cc9400673.jpg"/>
                </div>
            </Fragment>
        )
    }

}

export default Index;
