import React, { Component } from 'react';
import './App.css';
import Landing from './Pages/LandingandLogin/Landing';
import {Route, Switch} from 'react-router-dom';
import MainPage from "./Pages/Home/MainPage.jsx";
import ProtectedRoute from './Pages/LandingandLogin/ProtectedRoute';


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Landing} />
        <ProtectedRoute path="/" component={MainPage} />
      </Switch>
    );
  }
}

export default App;