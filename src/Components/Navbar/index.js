import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements.js";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Supplier Registration Form
          </NavLink>
          <NavLink to="/calendar" activeStyle>
            Calendar
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
