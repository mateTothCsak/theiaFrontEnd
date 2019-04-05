import React from 'react';
import './Material.css';


const Material = (props) => {


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
                    <table>
                        <thead>
                        <tr>
                            <th>Damage</th>
                            <th>Health</th>
                            <th>Value</th>
                            <th>Rarity</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{props.damage}</td>
                            <td>{props.health}</td>
                            <td>{props.value} coin</td>
                            <td>{props.rarity}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="descriptionContainer">
                <div>
                    <h2>Description</h2>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
};

export default Material;