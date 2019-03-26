import React, { Component } from 'react';
import {Route, Router, Switch} from "react-router-dom";
import Index from './pages/Index/Index';
import Game from './pages/Game/Game';
import Registration from './pages/Registration/Registration';
import LogIn from './pages/LogIn/LogIn';
import './App.css';
import history from './History';
import Encyclopedia from "./pages/Encyclopedia/Encyclopedia";
import LogOut from "./pages/LogOut/LogOut";
import Profile from "./pages/Profile/Profile";
import Craft from "./pages/Craft/Craft";



class App extends Component {
    constructor(props){
        super(props);

        this.state = {
        };
    }

  render() {
      return  (
      <Router history={history}>
          <Switch>
              <Route exact path="/" component={Index}/>
              <Route exact path="/game" component={Game} />>
              <Route exact path="/registration" component={Registration} />>
              <Route exact path="/login" component={LogIn}  />>
              <Route exact path="/logout" component={LogOut}  />>
              <Route exact path="/encyclopedia" component={Encyclopedia}  />>
              <Route exact path="/profile" component={Profile}  />>
              <Route exact path="/craft" component={Craft}  />>
          </Switch>
      </Router>
      )
  }
}

export default App;
