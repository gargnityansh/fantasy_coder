import React, { Component } from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import FooterComponent from '../../components/FooterComponent';
class ProblemList extends Component {
  state = {}
  render() {
    return (
      <>
        <HeaderComponent />
        <div className="jumbotron" style={{ height: "250px" }}>
          <div className="container">
            <h1>Practice</h1>
          </div>
        </div>
        <div className="container">
          <br />

        </div>
        <FooterComponent />
      </>
    );
  }
}

export default ProblemList;