import React from "react";
import { Navbar, NavItem, Icon } from "react-materialize";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header-edit">
      <Navbar
        className="navbar-edit"
        alignLinks="left"
        brand={
          <a className="brand-logo right" href="#">
            Phimmoi.net
          </a>
        }
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: "left",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true,
        }}
      >
        <NavItem onClick={() => navigate("/")}>Getting started</NavItem>
        <NavItem onClick={() => navigate("contact")}>Contact</NavItem>
      </Navbar>
    </div>
  );
};
