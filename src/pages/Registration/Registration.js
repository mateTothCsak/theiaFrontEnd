import React, {Component, Fragment } from 'react';
import Navbar from '../../commonComponents/Navbar/Navbar';
import './Registration.css';


class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
            accepted: false
        }
    }


    validateForm() {
        let emailCheck = this.state.email.length > 4;
        let userNameCheck = this.state.userName.length > 4;
        let passwordCheck = this.state.password.length > 4;
        let confirmPasswordCheck = (this.state.confirmPassword === this.state.password);
        let acceptedCheck = this.state.accepted;
        return emailCheck && userNameCheck && passwordCheck && confirmPasswordCheck && acceptedCheck;
    }

    handleEmailChange = event => {this.setState({email: event.target.value});};
    handleUserNameChange = event => {this.setState({userName: event.target.value});};
    handlePasswordChange = event => {this.setState({password: event.target.value});};
    handleConfirmPasswordChange = event => {this.setState({confirmPassword: event.target.value});};
    handleAcceptedChange = event => {this.setState({accepted: !this.state.accepted});};



    render() {
        return (
            <Fragment>
                <Navbar pageName="Registration" user={false} />
                <h1>Registration</h1>
                <div className="register">
                    <form action='http://localhost:8080/registration' method="post">
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
                            Username:</label>
                        <br/>
                            <input
                                name="userName"
                                type="text"
                                onChange={this.handleUserNameChange} />
                        <br/>
                        <label>
                            Password:</label>
                        <br/>
                            <input
                                name="password"
                                type="password"
                                onChange={this.handlePasswordChange} />
                        <br/>
                        <label>
                            Confirm Password:</label>
                        <br/>
                            <input
                                type="password"
                                onChange={this.handleConfirmPasswordChange} />
                        <br/>
                        <label>
                            I have read and understood the terms and conditions:</label>
                            <input id="checkBox"
                                type="checkbox"
                                onChange={this.handleAcceptedChange} />
                        <br/>
                        <button type="submit" disabled={!this.validateForm()} >Register</button>
                    </form>
                </div>
            </Fragment>
        )
    }

}
//recreate the input form fields in components
export default Registration;



