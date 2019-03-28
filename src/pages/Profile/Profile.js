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
                    <div className="profilePictureContainer">
                        <h2>{this.state.user.userName}</h2>
                        <img src={require ('../../assets/images/gary.png')}/>
                    </div>
                    <div className="profileStatContainer">
                        <div>
                            <table id="profileTable">
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
                                        <td>{this.state.user.characterType}</td>
                                        <td>{this.state.user.level}</td>
                                        <td>{this.state.user.experience}</td>
                                        <td>{this.state.user.gold}</td>
                                        <td>{this.state.user.baseHealth}</td>
                                        <td>{this.state.user.damage}</td>
                                        <td>{this.state.user.attackSpeed}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="sidekickContainer">
                            <div>
                                <p>Left sidekick</p>
                                {this.state.user.leftSidekick && <img src={require ('../../assets/images/'+ this.state.user.leftSidekick + '.png')}/>}
                            </div>
                            <div>
                                <p>Right sidekick</p>
                                {this.state.user.rightSidekick && <img src={require ('../../assets/images/'+ this.state.user.rightSidekick + '.png')}/>}
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

}

export default Profile;
