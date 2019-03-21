import React, { Component, Fragment } from 'react';
import Iframe from "react-iframe";

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Fragment>
                <p id="playgame">Welcome to Theia Online!</p>
                <Iframe url="http://localhost/theia/theiagame/index.html"
                        width="480px"
                        height="660px"
                        id="game"
                        display="initial"
                        position="relative"
                        allowFullScreen/>
                <p>Enjoy our game! ;)</p>
            </Fragment>
        )
    }

}

export default Game;
