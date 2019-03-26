import React from 'react';
import './Material.css';


const Sidekick = (props) => {


    return(
        <div className="componentContainer bookEntry">
            <div className="componentPictureContainer">
                <div>
                    <h2>{props.name}</h2>
                    <img src={require ('../../../../assets/images/'+ props.pictureUrl + '.png')}/>
                </div>
            </div>
            <div className="statContainer">
                <div>
                    <h2>Statistics</h2>
                    <table className="sideKickTable">
                        <tbody>
                        <tr>
                            <th>Native type</th>
                            <td>{props.type}</td>
                        </tr>
                        <tr>
                            <th>Base Damage</th>
                            <td>{props.damage}</td>
                        </tr>
                        <tr>
                            <th>Health</th>
                            <td>{props.health} coin</td>
                        </tr>
                        <tr>
                            <th>Attack Speed</th>
                            <td>{props.attackSpeed}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="descriptionContainer">
                <div>
                    <h2>Description</h2>
                    <p className="sideKickDescription">{props.description}</p>
                </div>
            </div>
        </div>
    )
};

export default Sidekick;