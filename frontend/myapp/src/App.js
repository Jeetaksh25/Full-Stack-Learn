import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './App.css';

import Users from "./user/pages/Users.js"
import NewPlace from './places/pages/NewPlace.js';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min.js';

const App = ()=> {
  return (
    <>
    <Router>
        <Switch>
        <Route path="/" exact><Users/></Route>
        <Route path="/places/new" exact><NewPlace/></Route>
        <Redirect to="/"/>
      </Switch>
    </Router>
    </>
  );
}

export default App; 
