
import React from 'react'
import Material from "./repeatingComponents/Material";


const Materials = (props) => {

    let descriptions = {
        clay: "An example of clay is a soft blob of water-soaked earth or fine grain soil that you use when wet and pliable to sculpt a vase, which is then fired under high heat and becomes hard.\n" +
            "\n",
        coal: "Coal is a fossil fuel and is the altered remains of prehistoric vegetation that originally accumulated in swamps and peat bogs. The energy we get from coal today comes from the energy that plants absorbed from the sun millions of years ago.",
        limestone: "Limestone is a sedimentary rock, composed mainly of skeletal fragments of marine organisms such as coral, forams and molluscs. Its major materials are the minerals calcite and aragonite, which are different crystal forms of calcium carbonate.",
        rock: "Rocks are composed of grains of minerals, which are homogeneous solids formed from a chemical compound arranged in an orderly manner. The aggregate minerals forming the rock are held together by chemical bonds."
    }



    return(
        <div className="bookElementContainer">
            <h2 className="bookElementHeader">The following minerals can be found throughout the game</h2>
            <Material name="Clay" pictureUrl="clay" damage="10" health="10" value="1" rarity="Common" description={descriptions.clay}/>
            <Material name="Coal" pictureUrl="coal" damage="10" health="15" value="1" rarity="Rare" description={descriptions.coal}/>
            <Material name="Limestone" pictureUrl="limestone" damage="10" health="20" value="1" rarity="Rare" description={descriptions.limestone}/>
            <Material name="Rock" pictureUrl="rock" damage="10" health="30" value="1" rarity="Epic" description={descriptions.rock}/>

        </div>
    )
};

export default Materials;