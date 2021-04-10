import React,{useState} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';
import auth from "./auth";
import { Link,NavLink } from "react-router-dom";
import "./css/compStyle.css";
import { withRouter } from 'react-router-dom';
import LoginModal from './LoginModal'

function HeaderComponent(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const logout = () => {
    auth.logout(() => {
      props.history.push("/");
    })
  };
  const UserDropdown = () => {
    return (
      <UncontrolledDropdown nav>
        <DropdownToggle nav caret className="text-white">
          {auth.getUser()}
              </DropdownToggle>
        <DropdownMenu className="my-" right>
          <DropdownItem className="my-0 ml-0 pl-3">
            <NavLink activeClassName="active" className="py-1 nav-link comp-nav mx-1" to="/contests">Profile</NavLink>
          </DropdownItem>
          <DropdownItem className="my-0 ml-0 pl-3" divider />
          <DropdownItem className="my-0 ml-0 pl-3">
            <Link activeClassName="active" className="py-1 nav-link comp-nav mx-1" onClick={logout}>Logout</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  const LogoutBtn = () => {
    return (
      <NavItem className="nav-buttons mr-md-5">
        <button className="btn btn-light" onClick={toggleModal}>Login</button>
      </NavItem>
    );
  }
  const NavBtn = () => {
    return (auth.isAuthenticated() ? <UserDropdown /> : <LogoutBtn />);
  }
  return (
    <>
      <Navbar className="font-head" dark expand="md" fixed="top" style={{ color:"white",backgroundColor:"#402dfb"}}>
        <NavbarBrand className="ml-md-5" href="/">
          <h3 className="m-0 pt-0 pb-0 ml-3 font-weight-bold"><a >O<span style={{color:"#F0C017"}}>z</span>one</a></h3>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse className="ml-md-5" isOpen={isOpen} navbar>
          <Nav className="mr-auto d-flex align-items-center" navbar>
            <NavItem>
              <NavLink activeClassName="active" className="nav-link comp-nav mx-1" to="/problems">PRACTICE</NavLink>
            </NavItem>
            <NavItem>
              <NavLink activeClassName="active" className="nav-link comp-nav mx-1" to="/contests">CONTESTS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink activeClassName="active" className="nav-link comp-nav mx-1" to="/store">STORE</NavLink>
            </NavItem>
            <NavItem>
              <NavLink activeClassName="active" className="nav-link comp-nav mx-1" to="/leaderboard">LEADERBORAD</NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-md-auto mr-md-5 d-flex justify-content-center">
            <NavBtn/>
          </Nav>
        </Collapse>
      </Navbar><br/><br/>
      <LoginModal toggleModal={toggleModal} isModalOpen={isModalOpen} />
    </>
  );
}

export default withRouter(HeaderComponent);