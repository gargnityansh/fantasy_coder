import React, { Component } from 'react';
import './App.css';
import Landing from './Pages/LandingandLogin/Landing';
import {Route, Switch,Redirect} from 'react-router-dom';
import ProtectedRoute from './Pages/LandingandLogin/ProtectedRoute';
import Contests from './Pages/ContestList/ContestPage';
import Problemlist from './Pages/ProblemList/ProblemList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/contests" exact component={Contests} />
        <Route path="/problems" exact component={Problemlist} />
        <Redirect to="/contests" />
      </Switch>
    );
  }
}

export default App;