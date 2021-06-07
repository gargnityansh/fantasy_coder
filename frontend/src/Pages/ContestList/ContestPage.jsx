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
const Img64 = ({ data }) => { return (<img src={`data:image/jpeg;base64,${data}`} />); };
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
          <br />
          <Img64 data="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"/>
          <br/><br/>
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