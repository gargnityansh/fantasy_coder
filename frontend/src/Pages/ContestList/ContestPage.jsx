import React, { Component, useState, useEffect } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Nav, NavItem, TabContent, TabPane, NavLink, Row } from 'reactstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import LoginModal from '../../components/LoginModal';
import auth from "../../components/auth";
import HeaderComponent from '../../components/HeaderComponent';
import FooterComponent from '../../components/FooterComponent';
import HeaderCarousel from '../../components/HeaderCarousel';
const CONTESTS =
  [
    {
      contest_id: 'C1',
      contest_name: 'Contest 1(Upcomming)',
      start_time: "Fri, 30 Apr 2021 16:09:32 GMT",
      end_time: "Fri, 30 Apr 2021 19:09:32 GMT",
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
function RenderCards(props) {
  const dateFormat = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' });
  return (
    <div className="">
      <Card>
        <a className="contest-card-link" onClick={() => { props.onClick(props.contest.contest_id) }}>
          <CardImg top width="100%" src={props.contest.contest_img} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5" className="contest-card-title">{props.contest.contest_name}</CardTitle>
            <br />
            <div className="row">
              <CardSubtitle tag="h6" className="mb-2 text-muted col-5"><b>Date :</b ><br />{dateFormat.format(new Date(props.contest.start_time))}</CardSubtitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted col-3 px-0"><b>Starts :</b ><br />{new Date(props.contest.start_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</CardSubtitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted col-4"><b>Ends :</b><br />{new Date(props.contest.end_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</CardSubtitle>
            </div>
          </CardBody>
        </a>
      </Card>
    </div>
  );
}

class Contests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',
      isModalOpen: false,
      liveContests: [
        {
          contest_id: 'C2',
          contest_name: 'Live Contest Name',
          start_time: '2021-03-25 15:00:00',
          end_time: '2022-04-05 17:00:00',
          contest_img: '/assets/img/logo.jpeg'
        },
        {
          contest_id: 'C2',
          contest_name: 'Live Contest Name',
          start_time: '2021-03-25 15:00:00',
          end_time: '2022-04-05 17:00:00',
          contest_img: '/assets/img/logo.jpeg'
        },
        {
          contest_id: 'C2',
          contest_name: 'Live Contest Name',
          start_time: '2021-03-25 15:00:00',
          end_time: '2022-04-05 17:00:00',
          contest_img: '/assets/img/logo.jpeg'
        },
        {
          contest_id: 'C2',
          contest_name: 'Live Contest Name',
          start_time: '2021-03-25 15:00:00',
          end_time: '2022-04-05 17:00:00',
          contest_img: '/assets/img/logo.jpeg'
        },
      ],
      upcomingContests: [
        {
          contest_id: 'C1',
          contest_name: 'Upcoming Contest Name',
          start_time: "Fri, 30 Apr 2021 16:09:32 GMT",
          end_time: "Fri, 30 Apr 2021 19:09:32 GMT",
          contest_img: '/assets/img/2842680.jpg'
        },
        {
          contest_id: 'C1',
          contest_name: 'Upcoming Contest Name',
          start_time: "Fri, 30 Apr 2021 16:09:32 GMT",
          end_time: "Fri, 30 Apr 2021 19:09:32 GMT",
          contest_img: '/assets/img/2842680.jpg'
        },
        {
          contest_id: 'C1',
          contest_name: 'Upcoming Contest Name',
          start_time: "Fri, 30 Apr 2021 16:09:32 GMT",
          end_time: "Fri, 30 Apr 2021 19:09:32 GMT",
          contest_img: '/assets/img/2842680.jpg'
        },
        {
          contest_id: 'C1',
          contest_name: 'Upcoming Contest Name',
          start_time: "Fri, 30 Apr 2021 16:09:32 GMT",
          end_time: "Fri, 30 Apr 2021 19:09:32 GMT",
          contest_img: '/assets/img/2842680.jpg'
        },
      ],
      pastContests: [
        {
          contest_id: 'C3',
          contest_name: 'Past Contest Name',
          start_time: '2021-03-25 15:00:00',
          end_time: '2021-03-25 17:00:00',
          contest_img: '/assets/img/logoName.jpeg'
        },
        {
          contest_id: 'C3',
          contest_name: 'Past Contest Name',
          start_time: '2021-03-25 15:00:00',
          end_time: '2021-03-25 17:00:00',
          contest_img: '/assets/img/logoName.jpeg'
        },
        {
          contest_id: 'C3',
          contest_name: 'Past Contest Name',
          start_time: '2021-03-25 15:00:00',
          end_time: '2021-03-25 17:00:00',
          contest_img: '/assets/img/logoName.jpeg'
        },
        {
          contest_id: 'C3',
          contest_name: 'Past Contest Name',
          start_time: '2021-03-25 15:00:00',
          end_time: '2021-03-25 17:00:00',
          contest_img: '/assets/img/logoName.jpeg'
        },
        {
          contest_id: 'C3',
          contest_name: 'Past Contest Name',
          start_time: '2021-03-25 15:00:00',
          end_time: '2021-03-25 17:00:00',
          contest_img: '/assets/img/logoName.jpeg'
        },
      ],
    }
    this.toggleActiveTab = this.toggleActiveTab.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.goToContestProblems = this.goToContestProblems.bind(this);
  }

  componentDidMount() {
    // Uncomment below Axios async calls for testing
    // this.getLiveContests();
    // this.getPastContests();
    // this.getUpcomingContests();
  }
  toggleModal() { this.setState({ isModalOpen: !this.state.isModalOpen, activeTab: "1" }); }

  // Axios Async request for contest data
  getLiveContests = async () => {
    try {
      const res = await axios.get(`http://104.211.91.225:5000/contest/ongoing`);
      this.setState({ liveContests: res.data });
    } catch (err) {
      console.log(err);
      this.setState({ liveContests: [] });
    }
  };
  getUpcomingContests = async () => {
    try {
      const res = await axios.get(`http://104.211.91.225:5000/contest/upcoming`);
      this.setState({ upcomingContests: res.data });
    } catch (err) {
      console.log(err);
      this.setState({ upcomingContests: [] });
    }
  }
  getPastContests = async () => {
    try {
      const res = await axios.get(`http://104.211.91.225:5000/contest/past`);
      this.setState({ pastContests: res.data });
    } catch (err) {
      console.log(err);
      this.setState({ pastContests: [] });
    }
  }

  toggleActiveTab = (tab) => { if (this.state.activeTab !== tab) { this.setState({ activeTab: tab }); } };

  goToContestProblems = (contest_id) => {
    if (auth.isAuthenticated()) {
      // return <Redirect to={`/contests/${contest.contest_id}`}/>
      alert("successfull");
    }
    else {
      this.toggleModal();
    }
  }
  // Rendering Live contests
  live = () => this.state.liveContests.map((contest) => {
    return (
      <div key={contest.contest_id} className="col-12 col-md-4 mt-5">
        <RenderCards contest={contest} onClick={this.goToContestProblems} />
      </div>
    );
  });
  // Rendering Upcoming contests
  upcoming = () => this.state.upcomingContests.map((contest) => {
    return (
      <div key={contest.contest_id} className="col-12 col-md-4 mt-5">
        <RenderCards contest={contest} onClick={this.goToContestProblems} />
      </div>
    );
  });
  // Rendering previous contests
  previous = () => this.state.pastContests.map((contest) => {
    return (
      <div key={contest.contest_id} className="col-12 col-md-4 mt-5">
        <RenderCards contest={contest} onClick={this.goToContestProblems} />
      </div>
    );
  });


  render() {
    return (
      <>
        <HeaderComponent />

        <LoginModal toggleModal={this.toggleModal} isModalOpen={this.state.isModalOpen} />
        <div className="contests-page-wrapper">
          <div className="jumbotron" style={{ height: "300px" }}>
            <div className="container">
              <h1>Contests & <br /> Programming Challenges</h1>
              <HeaderCarousel />
            </div>
          </div>
          <br/>
          <div className="container contest-container px-0 mb-5">
            <div>
              <div className="d-flex justify-content-center">
                <Nav tabs className="row w-100 d-flex align-items-center justify-content-center">
                  <NavItem className="col-4 text-center px-0 nav-tab-link">
                    <NavLink
                      className={this.state.activeTab == '1' ? 'active' : ''}
                      onClick={() => { this.toggleActiveTab('1'); }}>
                      Live
                    </NavLink>
                  </NavItem>
                  <NavItem className="col-4 text-center px-0 nav-tab-link">
                    <NavLink
                      className={this.state.activeTab == '2' ? 'active' : ''}
                      onClick={() => { this.toggleActiveTab('2'); }}>
                      Upcoming
                    </NavLink>
                  </NavItem>
                  <NavItem className="col-4 text-center px-0 nav-tab-link">
                    <NavLink
                      className={this.state.activeTab == '3' ? 'active' : ''}
                      onClick={() => { this.toggleActiveTab('3'); }}>
                      Previous
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
              <TabContent className="container px-md-4 pb-4" activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  <Row>
                    {this.live()}
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    {this.upcoming()}
                  </Row>
                </TabPane>
                <TabPane tabId="3">
                  <Row>
                    {this.previous()}
                  </Row>
                </TabPane>
              </TabContent>
            </div>
          </div>
        </div>
        <FooterComponent />
      </>
    );
  }
}

export default Contests;





// Old Render Functions
// Rendering Live contests
// live = CONTESTS.filter((contest) =>
//   ((new Date(contest.start_time)).getTime() < (new Date()).getTime()) && ((new Date(contest.end_time)).getTime() > (new Date()).getTime())
// ).map((contest) => {
//   return (
//     <div key={contest.contest_id} className="col-12 col-md-4 mt-5">
//       <RenderCards contest={contest} onClick={this.goToContestProblems} />
//     </div>
//   );
// });
// // Rendering Upcoming contests
// upcoming = CONTESTS.filter((contest) =>
//   (new Date(contest.start_time)).getTime() > (new Date()).getTime()
// ).map((contest) => {
//   return (
//     <div key={contest.contest_id} className="col-12 col-md-4 mt-5">
//       <RenderCards contest={contest} onClick={this.goToContestProblems} />
//     </div>
//   );
// });
// // Rendering previous contests
// previous = CONTESTS.filter((contest) =>
//   (new Date(contest.end_time)).getTime() < (new Date()).getTime()
// ).map((contest) => {
//   return (
//     <div key={contest.contest_id} className="col-12 col-md-4 mt-5">
//       <RenderCards contest={contest} onClick={this.goToContestProblems} />
//     </div>
//   );
// });