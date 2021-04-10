import React,{Component} from 'react';
import { Nav, NavItem, Modal, ModalBody, NavLink, TabContent, TabPane, Form, FormGroup, Label, Input, FormFeedback } from "reactstrap";
import axios from 'axios';
import auth from "./auth";
import { withRouter } from 'react-router-dom';

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1",
      loginError: "",
      signUpError: "",
      userLogin: {
        "username": '',
        "password": '',
        "remember": false
      },
      userSignUp: {
        "fname": '',
        "lname": '',
        "username": '',
        "email_id": '',
        "password": '',
        "cpassword": '',
      },
      touched: {
        username: '',
        email_id: '',
        password: '',
        cpassword: '',
      }
    };
    this.setActiveTab = this.setActiveTab.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handleSignUpChange = this.handleSignUpChange.bind(this);
    this.validate = this.validate.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  setActiveTab(selectedTab) { this.setState({ activeTab: selectedTab }); }
  handleBlur = (field) => (event) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  }
  validate(username, email_id, password, cpassword) {
    const errors = {
      username: '',
      email_id: '',
      password: '',
      cpassword: ''
    };
    if (this.state.touched.username && username.length < 3)
      errors.username = 'Username should be greater than 3 characters long';

    const regex_email = /^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w+$/;
    if (this.state.touched.email_id && !regex_email.test(email_id))
      errors.email_id = 'Enter a valid email address';

    const regex_pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]{8,20}$/;
    if (this.state.touched.password && !regex_pass.test(password))
      errors.password = 'Password must have at least 1 number 1 uppercase and lowercase character, 1 special symbol and between 8 to 20 characters';

    if (this.state.touched.cpassword && !(password === cpassword))
      errors.cpassword = 'Passwords don\'t match';

    return errors;
  }

  handleLoginChange(event) {
    const target = event.target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    const name = target.name;
    let { userLogin } = this.state;
    this.setState({
      userLogin: {
        ...this.state.userLogin,
        [name]: value
      }
    });
  }

  handleSignUpChange(event) {
    const target = event.target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    const name = target.name;
    let { userSignUp } = this.state;
    this.setState({
      userSignUp: {
        ...this.state.userSignUp,
        [name]: value
      }
    });
  }

  // Handling log in through Async await 
  handleLoginSubmit = (event) => {
    event.preventDefault();
    const loginData = this.state.userLogin;
    const sendPostRequest = async () => {
      try {
        const res = await axios.post(`http://104.211.91.225:5000/login`, loginData);
        if (res.data.status === 200) {
          auth.login(() => {
            auth.createUser(loginData.username);
            this.props.history.push("/contests");
            this.props.toggleModal();
          });
        }
        else {
          this.setState({ loginError: "Invalid login details!!" });
        }
      } catch (err) {
        console.log(err);
        this.setState({ loginError: "Error : Please, try again later!!" });
      }
    };
    sendPostRequest();
  }
  // Handling sign up through Async await 
  handleSignUpSubmit(event) {
    event.preventDefault();
    const signUpData = this.state.userSignUp;
    const sendPostRequest = async () => {
      try {
        const res = await axios.post(`http://104.211.91.225:5000/register`, signUpData);
        if (res.data.status === 200) {
          auth.login(() => {
            auth.createUser(signUpData.username);
            this.props.history.push("/contests");
            this.props.toggleModal();
          });
        }
        else {
          this.setState({ signUpError: res.data.msg });
        }
      } catch (err) {
        this.setState({ signUpError: "Please, try again later!!" });
      }
    };
    sendPostRequest();
  }
  render() {
    const errors = this.validate(this.state.userSignUp.username, this.state.userSignUp.email_id, this.state.userSignUp.password, this.state.userSignUp.cpassword);
    return (
      <Modal id="loginSignUp" isOpen={this.props.isModalOpen} toggle={this.props.toggleModal} className="login">
        <ModalBody className="auth-inner pt-5">
          <Nav tabs className="d-flex justify-content-center align-items-center mt-2 mb-2">
            <NavItem className="w-50 text-center">
              <NavLink className={this.state.activeTab == '1' ? 'active' : ''} onClick={() => this.setActiveTab('1')} style={{ cursor: "pointer" }}>
                <h5 className="font-weight-bold pb-0 pt-2">Login</h5>
              </NavLink>
            </NavItem>
            <NavItem className="w-50 text-center">
              <NavLink className={this.state.activeTab == '2' ? 'active' : ''} onClick={() => this.setActiveTab('2')} style={{ cursor: "pointer" }}>
                <h5 className="font-weight-bold pb-0 pt-2">Sign Up</h5>
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab} className="mt-4">
            <TabPane tabId="1">
              {/* SIGN IN */}
              <Form onSubmit={this.handleLoginSubmit}>
                <FormGroup>
                  <Label className="font-weight-bold">Username or Email</Label>
                  <Input type="text" name="username" className="form-control" placeholder="Enter username or email" value={this.state.userLogin.email} onChange={this.handleLoginChange} required />
                </FormGroup>
                <FormGroup>
                  <Label className="font-weight-bold">Password</Label>
                  <Input type="password" id="password" name="password" className="form-control" placeholder="Enter password" value={this.state.userLogin.password} onChange={this.handleLoginChange} required />
                </FormGroup>
                <FormGroup>
                  <div className="custom-control custom-checkbox">
                    <Input type="checkbox" className="custom-control-input" id="remember" name="remember" value={this.state.userLogin.remember} onChange={this.handleLoginChange} />
                    <Label className="custom-control-label" htmlFor="remember" >Remember me</Label>
                  </div>
                </FormGroup>
                <FormGroup>
                  <FormFeedback className="d-block">{this.state.loginError}</FormFeedback>
                </FormGroup>
                <button type="submit" className="btn btn-primary btn-block">Login</button>
                <p className="forgot-password text-right">
                  <a href="#">Forgot password?</a>
                </p>
              </Form>
            </TabPane>
            <TabPane tabId="2">
              {/* SIGN UP */}
              <Form onSubmit={this.handleSignUpSubmit}>
                <FormGroup>
                  <label className="font-weight-bold">First name</label>
                  <input type="text" id="fname" name="fname" className="form-control" placeholder="First name" value={this.state.userSignUp.firstname} onChange={this.handleSignUpChange} required />
                </FormGroup>
                <FormGroup>
                  <label className="font-weight-bold">Last name</label>
                  <input type="text" id="lname" name="lname" className="form-control" placeholder="Last name" value={this.state.userSignUp.lastname} onChange={this.handleSignUpChange} required />
                </FormGroup>
                <FormGroup>
                  <label className="font-weight-bold">Username</label>
                  <input type="text" id="username" name="username" className="form-control" placeholder="User name" value={this.state.userSignUp.username} onChange={this.handleSignUpChange} required
                    onBlur={this.handleBlur('username')} valid={errors.username === ''} invalid={errors.username !== ''}
                  />
                  <FormFeedback>{errors.username}</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <label className="font-weight-bold">Email address</label>
                  <input type="email" name="email_id" className="form-control" placeholder="Enter email" value={this.state.userSignUp.email} onChange={this.handleSignUpChange} required
                    onBlur={this.handleBlur('email_id')} valid={errors.email_id === ''} invalid={errors.email_id !== ''}
                  />
                  <FormFeedback>{errors.email_id}</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <label className="font-weight-bold">Password</label>
                  <input type="password" name="password" className="form-control" placeholder="Enter password" value={this.state.userSignUp.password} onChange={this.handleSignUpChange} required
                    onBlur={this.handleBlur('password')} valid={errors.password === ''} invalid={errors.password !== ''}
                  />
                  <FormFeedback>{errors.password}</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <label className="font-weight-bold">Confirm Password</label>
                  <input type="password" name="cpassword" className="form-control" placeholder="Confirm password" value={this.state.userSignUp.cnfPassword} onChange={this.handleSignUpChange} required
                    onBlur={this.handleBlur('cpassword')} valid={errors.cpassword === ''} invalid={errors.cpassword !== ''}
                  />
                  <FormFeedback>{errors.cpassword}</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <FormFeedback className="d-block">{this.state.signUpError}</FormFeedback>
                </FormGroup>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                  Already registered <a className="or-signin" style={{ color: "#167BFF" }} onClick={() => this.setActiveTab('1')} >sign in?</a>
                </p>
              </Form>
            </TabPane>
          </TabContent>
        </ModalBody>
      </Modal>
    );
  }
}

export default withRouter(LoginModal);