import React, { Component } from 'react';
import { BrowserRouter,Switch, Route, Redirect, Link, withRouter, useRouteMatch ,useParams} from "react-router-dom";
import Contests from '../ContestList/ContestPage';
import Problemlist from '../ProblemList/ProblemList';
import auth from "../LandingandLogin/auth";
import ProtectedRoute from '../LandingandLogin/ProtectedRoute';
import HeaderComponent from '../../components/HeaderComponent';
import FooterComponent from '../../components/FooterComponent';

class MainPage extends Component {
  state = {}
  render() {
    const { path } = this.props.match;
    return (
      <>
        <HeaderComponent/>
        {/* <button onClick={() => {auth.logout(() => {this.props.history.push("/");});}}>Logout </button><hr /> */}
        <Switch>
          {/* <ProtectedRoute path="/user" exact component={Contests} /> */}
          <ProtectedRoute path="/contests" exact component={Contests} />
          <ProtectedRoute path="/problems" exact component={Problemlist} />
          <Redirect to="/contests" />
        </Switch>
        <FooterComponent/>
      </>
    );
  }
}
export default withRouter(MainPage);