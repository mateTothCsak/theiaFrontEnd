import React, { Component } from 'react';
import {Route, Router, Switch} from "react-router-dom";
import Index from './containers/Index/Index';
import Game from './containers/Game/Game';
import './App.css';
import history from './History';



class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            data : []
        };
    }

  render() {
      return  (
      <Router history={history}>
          <Switch>
              <Route exact path="/" render={() => <Index /> } />
              <Route exact path="/game" render={() => <Game /> } />>
          </Switch>
      </Router>
      )
  }
}

export default App;
