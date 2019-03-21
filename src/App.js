import React, { Component } from 'react';
import {Route, Router, Redirect, Switch, BrowserRouter} from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
      return (
      <Router >
          <Switch>
              <Route exact path="/" render={(props) => <Index {...props}/> } />
          </Switch>
      </Router>
      )
  }
}

export default App;
