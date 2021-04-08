import React, { Component, useState, useEffect } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Nav, NavItem, TabContent, TabPane, NavLink, Col, Row } from 'reactstrap';
import axios from 'axios';
import HeaderComponent from '../../components/HeaderComponent';
import FooterComponent from '../../components/FooterComponent';
const CONTESTS =
  [
    {
      contest_id: 'C1',
      contest_name: 'Contest 1(Upcomming)',
      start_time: '2021-05-05 15:00:00',
      end_time: '2021-06-05 17:00:00',
      contest_img: '/assets/img/2842680.jpg'
    },
    {
      contest_id: 'C2',
      contest_name: 'Contest 2(live)',
      start_time: '2021-03-25 15:00:00',
      end_time: '2022-04-05 17:00:00',
      contest_img: '/assets/img/logo.jpeg'
    },
    {
      contest_id: 'C3',
      contest_name: 'Contest 3(past)',
      start_time: '2021-03-25 15:00:00',
      end_time: '2021-03-25 17:00:00',
      contest_img: '/assets/img/logoName.jpeg'
    }
  ];
function RenderCards({ contest }) {
  return (
    <div className="">
      <Card>
        <CardImg top width="100%" src={contest.contest_img} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{contest.contest_name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted"><b>Start Time: </b>{contest.start_time}</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted"><b>End Time   : </b>{contest.end_time}</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
}
class Contests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',
      contests:[]
    }
    this.toggleActiveTab = this.toggleActiveTab.bind(this);
  }

  componentDidMount() {
    this.getContests();
  }
  // Axios Async request for contest data
  getContests = async () => {
    try {
      const res = await axios.get(`http://104.211.91.225:5000/login`);
      this.setState({contests: res.data});
    } catch (err) {
      console.log(err);
      this.setState({ contests:[]});
    }
  };

  toggleActiveTab = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }
  // Rendering Live contests
  live = CONTESTS.filter((contest) =>
    ((new Date(contest.start_time)).getTime() < (new Date()).getTime()) && ((new Date(contest.end_time)).getTime() > (new Date()).getTime())
  ).map((contest) => {
    return (
      <div key={contest.contest_id} className="col-12 col-md-4 mt-5">
        <RenderCards contest={contest} />
      </div>
    );
  });

  // Rendering Upcoming contests
  upcomming = CONTESTS.filter((contest) =>
    (new Date(contest.start_time)).getTime() > (new Date()).getTime()
  ).map((contest) => {
    return (
      <div key={contest.contest_id} className="col-12 col-md-4 mt-5">
        <RenderCards contest={contest} />
      </div>
    );
  });

  // Rendering previous contests
  previous = CONTESTS.filter((contest) =>
    (new Date(contest.end_time)).getTime() < (new Date()).getTime()
  ).map((contest) => {
    return (
      <div key={contest.contest_id} className="col-12 col-md-4 mt-5">
        <RenderCards contest={contest} />
      </div>
    );
  });
  render() {
    return (
      <>
        <HeaderComponent />
        <div className="jumbotron" style={{ height: "300px" }}>
          <div className="container">
            <h1>Contests & <br /> Programming Challenges</h1>
          </div>
        </div>
        <div className="container">
          <br />
          <div >
            <div className="d-flex justify-content-center">
              <Nav tabs className="row w-100 d-flex align-items-center justify-content-center">
                <NavItem className="col-4 text-center px-0">
                  <NavLink
                    className={this.state.activeTab == '1' ? 'active' : ''}
                    onClick={() => { this.toggleActiveTab('1'); }}>
                    LIVE
              </NavLink>
                </NavItem>
                <NavItem className="col-4 text-center px-0">
                  <NavLink
                    className={this.state.activeTab == '2' ? 'active' : ''}
                    onClick={() => { this.toggleActiveTab('2'); }}>
                    UPCOMMING
              </NavLink>
                </NavItem>
                <NavItem className="col-4 text-center px-0">
                  <NavLink
                    className={this.state.activeTab == '3' ? 'active' : ''}
                    onClick={() => { this.toggleActiveTab('3'); }}>
                    PREVIOUS
              </NavLink>
                </NavItem>
              </Nav>
            </div>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  {this.live}
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  {this.upcomming}
                </Row>
              </TabPane>
              <TabPane tabId="3">
                <Row>
                  {this.previous}
                </Row>
              </TabPane>
            </TabContent>
          </div>
        </div>
        <FooterComponent />
      </>
    );
  }
}

export default Contests;