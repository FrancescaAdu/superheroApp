import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import reactLogo from "../../assets/superhero.png";

const Header = () => {
  return (
    <>
      <header className="content-header">
        <img className="logo" src={reactLogo} alt="SuperHero Logo" />
        <nav>
          <NavLink className="navbar-items" to="/">
            Home
          </NavLink>
          <NavLink className="navbar-items" to="/MyTeam">
            Myteam
          </NavLink>
          <NavLink className="navbar-items" to="/HeroSearch">
            SearchPage
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
