import React from "react";
import { Nav, NavLink, NavIcon, Bars } from "./NavbarElements";

function Navbar() {
  return (
    <>
      <Nav>
        <NavLink to="/"></NavLink>
        <NavIcon>
          <p>GUITARS</p>
          

          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
}

export default Navbar;
