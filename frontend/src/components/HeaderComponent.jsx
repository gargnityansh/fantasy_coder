import React,{useState} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';
import auth from "../Pages/LandingandLogin/auth";
import { Link,NavLink } from "react-router-dom";
import "./css/compStyle.css";
function HeaderComponent(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Navbar className="font-head" dark expand="md" style={{ color:"white",backgroundColor:"#402dfb"}}>
        <NavbarBrand className="ml-md-5" href="/">
          <h3 className="m-0 pt-0 pb-0 ml-3 font-weight-bold"><a >O<span style={{color:"#F0C017"}}>z</span>one</a></h3>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse className="ml-md-5" isOpen={isOpen} navbar>
          <Nav className="mr-auto d-flex align-items-center" navbar>
            <NavItem>
              <NavLink activeClassName="active" className="nav-link comp-nav mx-1" to="/user/problems">PRACTICE</NavLink>
            </NavItem>
            <NavItem>
              <NavLink activeClassName="active" className="nav-link comp-nav mx-1" to="/user/contests">CONTESTS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink activeClassName="active" className="nav-link comp-nav mx-1" to="/user/store">STORE</NavLink>
            </NavItem>
            <NavItem>
              <NavLink activeClassName="active" className="nav-link comp-nav mx-1" to="/user/leaderboard">LEADERBORAD</NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-md-auto mr-md-5 d-flex justify-content-center">
            <UncontrolledDropdown nav>
              <DropdownToggle nav caret>
                USERNAME
              </DropdownToggle>
              <DropdownMenu className="my-" right>
                <DropdownItem className="my-0 ml-0 pl-3">
                  <NavLink activeClassName="active" className="py-1 nav-link comp-nav mx-1" to="/user/contests">Profile</NavLink>
                </DropdownItem>
                <DropdownItem className="my-0 ml-0 pl-3">
                  <NavLink activeClassName="active" className="py-1 nav-link comp-nav mx-1" to="/user/contests">Coins</NavLink>
                </DropdownItem>
                <DropdownItem className="my-0 ml-0 pl-3" divider />
                <DropdownItem className="my-0 ml-0 pl-3">
                  <NavLink activeClassName="active" className="py-1 nav-link comp-nav mx-1" to="/user/contests">Logout</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>

    </>
  );
}

export default HeaderComponent;