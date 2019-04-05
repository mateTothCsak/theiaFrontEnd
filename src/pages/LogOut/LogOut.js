import React from 'react'
import {Redirect} from "react-router-dom";



const LogOut = (props) => {

    return(
        <Redirect  to={{pathname: "/", state: false}}/>
    )
};

export default LogOut;