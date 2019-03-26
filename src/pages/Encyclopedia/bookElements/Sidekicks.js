import React from 'react'
import Sidekick from "./repeatingComponents/Sidekick";


const Sidekicks = (props) => {

    let descriptions = {
        elephant: "Elephant is a small, blue elephant-like Sidekick. It has large, floppy ears, which it uses as fans to cool itself. There are two red pads on each ear and another on the bridge of its short trunk. This small trunk is sensitive, yet strong. It can send a person flying with an affectionate, playful bump of its snout. Additionally, this little Sidekick is easily capable of carrying an adult human on its back. Elephant has a single nail on each of its four feet, and a short tail.",
        owl: "Owl bears similarity to regular owls with brown plumage and has a darker brown triangle pattern of feathers running down its chest. Its wings and wedge-shaped tail are dark brown, while the undersides of its wings are light brown. It has bushy, cream-colored feather 'horns' that look similar to a trident or eyebrows. The ring pattern around its eyes and its talons are cream colored, and Owl's beak and talons are light pink. Owl can grow a small beard in its elderly stages."
    }

    return(
        <div className="bookElementContainer">
            <h2 className="bookElementHeader">The following sidekicks can be collected </h2>
            <Sidekick name="Elephant" pictureUrl="rockElephant" type="Rock" damage="75" health="50" attackSpeed="70" description={descriptions.elephant} />
            <Sidekick name="Owl" pictureUrl="clayOwl" type="Clay" damage="100" health="30" attackSpeed="70" description={descriptions.owl} />
        </div>
    )
};

export default Sidekicks;