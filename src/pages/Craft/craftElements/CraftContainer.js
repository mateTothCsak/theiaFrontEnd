


import React from 'react';
import '../Craft.css';


const CraftContainer = (props) => {


    return(
        <div className="craftContainer">
            <div className="stoneContainer">
                <img src={require ('../../../assets/images/clayStone.png')} />
                <p>Clay Soul</p>
                <p>50 gold</p>
                <button>Buy</button>
            </div>
            <div className="stoneContainer">
                <img src={require ('../../../assets/images/coalStone.png')} />
                <p>Coal Soul</p>
                <p>100 gold</p>
                <button disabled>Unavailable</button>
            </div>
            <div className="stoneContainer">
                <img src={require ('../../../assets/images/limestoneStone.png')} />
                <p>Limestone Soul</p>
                <p>300 gold</p>
                <button disabled>Unavailable</button>
            </div>
            <div className="stoneContainer">
                <img src={require ('../../../assets/images/rockStone.png')} />
                <p>Rock Soul</p>
                <p>50 gold</p>
                <button>Buy</button>
            </div>
        </div>
    )
};

export default CraftContainer;