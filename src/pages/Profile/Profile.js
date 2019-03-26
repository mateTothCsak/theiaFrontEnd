import React, { Component, Fragment } from 'react';
import Navbar from '../../commonComponents/Navbar/Navbar';
import './Profile.css';

class Profile extends Component {
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
                <Navbar pageName="Profile" user={this.state.user}/>
                <h1>{this.state.user.userName}'s Profile</h1>
                <div className="profileContainer">
                    <div>
                        <h2>{this.state.user.userName}</h2>
                        <img src={require ('../../assets/images/gary.png')}/>
                    </div>
                    <div>
                        <div>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Character Type</th>
                                        <th>Level</th>
                                        <th>Experience</th>
                                        <th>Gold</th>
                                        <th>Base Health</th>
                                        <th>Damage</th>
                                        <th>Attack Speed</th>
                                    </tr>
                                    <tr>
                                        <td>Maverick</td>
                                        <td>1</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>50</td>
                                        <td>200</td>
                                        <td>70</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="sidekickContainer">
                            <div>
                                <p>Left sidekick</p>
                                <p>None</p>
                            </div>
                            <div>
                                <p>Right sidekick</p>
                                <p>None</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

}

export default Profile;
