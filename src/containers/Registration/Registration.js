import React, {Component, Fragment } from 'react';
import Navbar from '../../commonComponents/Navbar/Navbar';


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
                <Navbar pageName="Registration"/>
                <div className="register">
                    <form action='http://localhost:8080/registration' method="post">
                        <label>
                            Email address:
                            <input
                                value={this.state.email}
                                onChange={this.handleEmailChange}
                                type="text"
                                name="email"
                                 />
                        </label>
                        <br/>
                        <label>
                            Username:
                            <input
                                name="userName"
                                type="text"
                                onChange={this.handleUserNameChange} />
                        </label>
                        <br/>
                        <label>
                            Password:
                            <input
                                name="password"
                                type="password"
                                onChange={this.handlePasswordChange} />
                        </label>
                        <br/>
                        <label>
                            Confirm Password:
                            <input
                                type="password"
                                onChange={this.handleConfirmPasswordChange} />
                        </label>
                        <br/>
                        <label>
                            I have read and understood the terms and conditions:
                            <input
                                type="checkbox"
                                onChange={this.handleAcceptedChange} />
                        </label>
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



