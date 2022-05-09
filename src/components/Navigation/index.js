import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import Yoka from "../../images/YokaLogo.png"


export default function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedOut /> : <LoggedIn />;

  return (
    <Navbar expand="lg">
      <Navbar.Brand as={NavLink} to="/home">
        <img
          src={Yoka}
          width="140px"
          height="140px"
          alt="Yoka For The Doggo's"
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem path="/home" linkText="HOME" />
          <NavbarItem path="/shop" linkText="SHOP" />
          <NavbarItem path="/about" linkText="ABOUT US" />
          <NavbarItem path="/faq" linkText="FAQ" />
          {loginLogoutControls}
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  );
}
