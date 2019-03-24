import React, {Component, Fragment } from 'react';
import Navbar from '../../commonComponents/Navbar/Navbar';
import {Link, Redirect} from "react-router-dom";
import * as axios from "axios";


class LogIn extends Component{
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            redirect: false
        }


    }

    /*
    componentDidMount() {

        let config = {
            headers: {
                crossOrigin: true,
                crossorigin: true,
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
            }
        }

        let data = {}

        const API_URL = 'http://localhost:8080/login';
        const Headers = {"Access-Control-Allow-Origin": "*", crossOrigin: true}


        axios.get(API_URL, Headers)
            .then(response => console.log(response))
            .catch(err => console.log(err));
        console.log("I tried");
    }*/

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
        this.setState({user:
                {userName: this.state.email, level: 1}})
        return <Redirect  to={{pathname: "/", state: this.state.user}}/>

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
                        {this.logIn}
                        <Link to={{pathname: '/', state: {userName: this.state.email, character: "male"}}}><button type="button" disabled={!this.validateForm()} >Register</button></Link>
                    </form>
                </div>


            </Fragment>
        )
    }

}

export default LogIn;


/*
setRedirect = () => {
    this.setState({
        redirect: true
    })
}
renderRedirect = () => {
    if (this.state.redirect) {
        return <Redirect
            to={{
                pathname: "/",
                search: "?utm=your+face",
                state: {referrer: "loginpage"}
            }}
        />
    }
};


     <div>
            {this.renderRedirect()}
            <button onClick={this.setRedirect}>Redirect</button>
        </div>

        <Link to={{pathname: '/', state: { userName: "Qwerox", character: "male"}}}>Go to homepage</Link>
 */