import React from "react";
import { Nav, NavLink, NavIcon, Bars } from "./NavbarElements";

function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavLink to="/"></NavLink>
        <NavIcon onClick={toggle}>
          <p>MENU</p>

          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
}

export default Navbar;
