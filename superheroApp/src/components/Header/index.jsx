import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import reactLogo from "../../assets/superhero.png";

const Header = () => {
  return (
    <>
      <header className="content-header">
        <nav className="top-nav">
          <NavLink className="navbar-items" to="/">
            Home
          </NavLink>
          <NavLink className="navbar-items" to="/MyTeam">
            Myteam
          </NavLink>
        </nav>
        <img className="logo" src={reactLogo} alt="SuperHero Logo" />
      </header>
      <Outlet />
    </>
  );
};

export default Header;
