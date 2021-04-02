import React, { Component } from 'react';
import './App.css';
import Landing from './Pages/LandingandLogin/Landing';
import {Route, Switch,Redirect} from 'react-router-dom';
import MainPage from "./Pages/Home/MainPage.jsx";
import ProtectedRoute from './Pages/LandingandLogin/ProtectedRoute';
import Contests from './Pages/ContestList/ContestPage';
import Problemlist from './Pages/ProblemList/ProblemList';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        {/* <ProtectedRoute path="/" component={MainPage} /> */}
        <ProtectedRoute path="/contests" exact component={Contests} />
        <ProtectedRoute path="/problems" exact component={Problemlist} />
        <Redirect to="/contests" />
      </Switch>
    );
  }
}

export default App;