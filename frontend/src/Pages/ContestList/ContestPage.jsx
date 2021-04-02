import React, { useState } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Nav, NavItem, TabContent, TabPane, NavLink, Col, Row } from 'reactstrap';
import { Link } from "react-router-dom";
import HeaderComponent from '../../components/HeaderComponent';
import FooterComponent from '../../components/FooterComponent';
const CONTESTS =
  [
    {
      contest_id: 'C1',
      contest_name: 'Contest 1(Upcomming)',
      start_time: '2021-04-05 15:00:00',
      end_time: '2021-04-05 17:00:00',
      contest_img: '/assets/img/2842680.jpg'
    },
    {
      contest_id: 'C2',
      contest_name: 'Contest 2(live)',
      start_time: '2021-03-25 15:00:00',
      end_time: '2021-04-05 17:00:00',
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
const Contests = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }
  const live = CONTESTS.filter((contest) =>
    ((new Date(contest.start_time)).getTime() < (new Date()).getTime()) && ((new Date(contest.end_time)).getTime() > (new Date()).getTime())
  ).map((contest) => {
    return (
      <div key={contest.contest_id} className="col-12 col-md-4 mt-5">
        <RenderCards contest={contest} />
      </div>
    );
  });
  const upcomming = CONTESTS.filter((contest) =>
    (new Date(contest.start_time)).getTime() > (new Date()).getTime()
  ).map((contest) => {
    return (
      <div key={contest.contest_id} className="col-12 col-md-4 mt-5">
        <RenderCards contest={contest} />
      </div>
    );
  });
  const previous = CONTESTS.filter((contest) =>
    (new Date(contest.end_time)).getTime() < (new Date()).getTime()
  ).map((contest) => {
    return (
      <div key={contest.contest_id} className="col-12 col-md-4 mt-5">
        <RenderCards contest={contest} />
      </div>
    );
  });

  return (
    <>
      <HeaderComponent />
      <div className="jumbotron" style={{ height: "250px" }}>
        <div className="container">
          <h1>Contests & <br /> Programming Challenges</h1>
        </div>
      </div>
      <div className="container">
        <br />
        <div>
          <Nav tabs className="row w-100 d-flex align-items-center justify-content-center">
            <NavItem className="col-4 text-center px-0">
              <NavLink
                className={activeTab == '1' ? 'active' : ''}
                onClick={() => { toggle('1'); }}>
                LIVE
              </NavLink>
            </NavItem>
            <NavItem className="col-4 text-center px-0">
              <NavLink
                className={activeTab == '2' ? 'active' : ''}
                onClick={() => { toggle('2'); }}>
                UPCOMMING
              </NavLink>
            </NavItem>
            <NavItem className="col-4 text-center px-0">
              <NavLink
                className={activeTab == '3' ? 'active' : ''}
                onClick={() => { toggle('3'); }}>
                PREVIOUS
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                {live}
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                {upcomming}
              </Row>
            </TabPane>
            <TabPane tabId="3">
              <Row>
                {previous}
              </Row>
            </TabPane>
          </TabContent>
        </div>
        {/* <Nav tabs>
            <NavItem className="">
              <Link className={this.state.activeTab == '1' ? 'active' : ''} onClick={() => this.setActiveTab('1')} style={{ cursor: "pointer" }}>
                <h5 className="">UPCOMMING</h5>
              </Link>
            </NavItem>
            <NavItem className="">
              <Link className={this.state.activeTab == '2' ? 'active' : ''} onClick={() => this.setActiveTab('2')} style={{ cursor: "pointer" }}>
                <h5 className="">LIVE</h5>
              </Link>
            </NavItem>
            <NavItem className="">
              <Link className={this.state.activeTab == '3' ? 'active' : ''} onClick={() => this.setActiveTab('3')} style={{ cursor: "pointer" }}>
                <h5 className="">PREVIOUS</h5>
              </Link>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              Upcomming
            </TabPane>
            <TabPane tabId="2">
              live
            </TabPane>
            <TabPane tabId="3">
              previous
            </TabPane>
          </TabContent> */}
      </div>
      <FooterComponent />
    </>
  );
}

export default Contests;