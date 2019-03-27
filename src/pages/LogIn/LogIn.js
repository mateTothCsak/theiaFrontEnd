import React, {Component, Fragment } from 'react';
import Navbar from '../../commonComponents/Navbar/Navbar';
import {Link, Redirect} from "react-router-dom";
import api from '../../connection/api';


class LogIn extends Component{
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            user: {userName: null}
        }

    }


    handleEmailChange = event => {this.setState({email: event.target.value});};
    handlePasswordChange = event => {this.setState({password: event.target.value});};

    validateForm(){
        let emailCheck = this.state.email.length > 4;
        let passwordCheck = this.state.password.length > 4;
        return emailCheck && passwordCheck;
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    logIn = event => {
        let userDetails = {};

        api.post("/login", {email: this.state.email, password: this.state.password})
            .then(response => {
                userDetails = response.data;
                this.setState({user: {
                                            userName: userDetails.userName,
                                            id: userDetails.id,
                                            type: userDetails.type,
                                            attackSpeed: userDetails.attackSpeed,
                                            baseHealth: userDetails.baseHealth,
                                            characterType: userDetails.characterType,
                                            damage: userDetails.damage,
                                            email: userDetails.email,
                                            experience: userDetails.experience,
                                            gold: userDetails.gold,
                                            lastLogIn: userDetails.lastLogIn,
                                            level: userDetails.level,
                                            registrationDate: userDetails.registrationDate,
                                            leftSidekick: userDetails.leftSidekick,
                                            rightSidekick: userDetails.rightSidekick

                }}, () => {})
            })
            .catch(err => console.log(err));

    }


    render() {
        return(
            <Fragment>
                <Navbar pageName="Log In" user={false}/>
                <h1>Log In</h1>
                <div className="login">
                    <form action='http://localhost:8080/login' method="post">
                        <label>
                            Email address:</label><br/>
                        <input
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                            type="text"
                            name="email"
                        />
                        <br/>
                        <label>
                            Password:</label>
                        <br/>
                        <input
                            name="password"
                            type="password"
                            onChange={this.handlePasswordChange} />
                        <br/>
                         <div>
                            {this.state.user.userName && <Redirect to={{pathname: "/", state: {
                                    userName: this.state.user.userName,
                                    id: this.state.user.id,
                                    type: this.state.user.type,
                                    attackSpeed: this.state.user.attackSpeed,
                                    baseHealth: this.state.user.baseHealth,
                                    characterType: this.state.user.characterType,
                                    damage: this.state.user.damage,
                                    email: this.state.user.email,
                                    experience: this.state.user.experience,
                                    gold: this.state.user.gold,
                                    lastLogIn: this.state.user.lastLogIn,
                                    level: this.state.user.level,
                                    registrationDate: this.state.user.registrationDate,
                                    leftSidekick: this.state.user.leftSidekick,
                                    rightSidekick: this.state.user.rightSidekick,
                            }}}/>}
                            <button type="button" onClick={this.logIn}>Log In</button>
                        </div>
                    </form>
                </div>
            </Fragment>
        )
    }

}

export default LogIn;
