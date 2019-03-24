import React, { Component, Fragment } from 'react';
import Navbar from '../../commonComponents/Navbar/Navbar';
import classes from './Index.css';

class Index extends Component {
    constructor(props) {
        super(props);

        let user = this.props.location.state !== undefined ? this.props.location.state : false;


        this.state = {
            user: user
        }

        console.log(this.state.user);
    }

    render() {
        return (
            <Fragment>
                <Navbar pageName="Main page" user={this.state.user}/>
                <h1>Welcome to Theia Online!</h1>
                <div className="textArea1">
                    <div>
                        <h2>This is Theia</h2>
                        <p>Our world is filled with magic and adventure, yet the people of Theia prefer a rather calm life.<br/>
                            For this reason we are looking for heroes, wanderers and all kind of free spirits who are willing to risk their lives
                            in exchange for pride and wealth in this county.
                        </p>
                        <h3>Sounds like a job for you?</h3>
                        <p>Join us Today and be a Maverick of the realm!</p>
                    </div>
                    <img src="http://www.necropraxis.com/wp-content/uploads/2015/07/final-fantasy-legends-the-space-time-crystal-copy.jpg"/>
                </div>
                <div className="textArea1">
                    <img src="http://www.necropraxis.com/wp-content/uploads/2015/07/final-fantasy-legends-the-space-time-crystal-copy.jpg"/>
                    <div>
                        <h2>About the game</h2>
                        <p>Our world is filled with magic and adventure, yet the people of Theia prefer a rather calm life.<br/>
                            For this reason we are looking for heroes, wanderers and all kind of free spirits who are willing to risk their lives
                            in exchange for pride and wealth in this county.
                        </p>
                        <h3>Sounds like a job for you?</h3>
                        <p>Join us Today and be a Maverick of the realm!</p>
                    </div>
                </div>
                <div className="textArea1">
                    <div>
                        <h2>This is Theia</h2>
                        <p>Our world is filled with magic and adventure, yet the people of Theia prefer a rather calm life.<br/>
                            For this reason we are looking for heroes, wanderers and all kind of free spirits who are willing to risk their lives
                            in exchange for pride and wealth in this county.
                        </p>
                        <h3>Sounds like a job for you?</h3>
                        <p>Join us Today and be a Maverick of the realm!</p>
                    </div>
                    <img src="http://www.necropraxis.com/wp-content/uploads/2015/07/final-fantasy-legends-the-space-time-crystal-copy.jpg"/>
                </div>
            </Fragment>
        )
    }

}

export default Index;
