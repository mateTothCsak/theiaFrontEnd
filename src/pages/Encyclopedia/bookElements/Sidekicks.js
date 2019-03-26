import React from 'react'


const Sidekicks = (props) => {

    return(
        <div className="bookElementContainer">
            <h2 className="bookElementHeader">The following sidekicks can be collected: </h2>
            <div className="bookEntry">
                <img src={require ('../../../assets/images/gary.png')}/>
                <div className="charProfile">
                    <h2>Maverick</h2>
                    <p>In Theia all characters have the same stats, only their appearance and special skills might differ.<br/><br/>
                        If you wish to make your hero stronger make it sure that you play with him/her to gather experience points.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Sidekicks;