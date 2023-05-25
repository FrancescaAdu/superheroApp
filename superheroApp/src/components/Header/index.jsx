import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const styles = ({ isActive }) => ({ color: isActive ? "#2B061E" : "#875053" });

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/" styles={styles}>
            Home
          </NavLink>
          <br />
          <NavLink to="/MyTeam" styles={styles}>
            Myteam
          </NavLink>
          <br />
          <NavLink to="/HeroSearch" styles={styles}>
            SearchPage
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
