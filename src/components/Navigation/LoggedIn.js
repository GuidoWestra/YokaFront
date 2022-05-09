import React from "react";
import Nav from "react-bootstrap/Nav";
import { AiOutlineShopping, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { NavLink } from "react-router-dom";

// import { useDispatch, useSelector } from "react-redux";
// import { logOut } from "../../store/user/actions";
// import Button from "react-bootstrap/Button";
// import { selectUser } from "../../store/user/selectors";
// import { BsFillPersonFill, BsSearch } from "react-icons/bs";
// import NavbarItem from "./NavbarItem";

export default function LoggedIn() {
  // const admin = user.isAdmin ? <LoggedIn /> :  null;

  return (
    <>
      <Nav.Link as={NavLink} to={"/search"}>
        <AiOutlineSearch style={{ fontSize: '20px' }} />
      </Nav.Link>
      <Nav.Link as={NavLink} to={"/profile"}>
        <AiOutlineUser style={{ fontSize: '20px' }} />
      </Nav.Link>
      <Nav.Link as={NavLink} to={"/cart"}>
        <AiOutlineShopping style={{ fontSize: '20px' }} />
      </Nav.Link>
    </>
  );
}

