


import React from 'react';
import '../Craft.css';


const PurchasedSidekick = (props) => {



    return(
        <div className="purchasedSidekick">
            <h2 className="increaseSize">Congratulations, you got an {props.showShop}!</h2>
            <img src={require ('../../../assets/images/' + props.showShop + '.png')}/>
            <p className="increaseSize">On which side should this Sidekick fight with you?</p>
            <button onClick={props.equipLeft}>Equip Left</button>
            <button onClick={props.equipRight}>Equip Right</button>
        </div>
    )
};

export default PurchasedSidekick;