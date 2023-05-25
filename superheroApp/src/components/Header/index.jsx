import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const styles = ({ isActive }) => ({ color: isActive ? "#2B061E" : "#875053" });

const Header = () => {
  return (
    <>
      <header>
        <NavLink to="/" styles={styles}>
          Home
        </NavLink>
        <NavLink to="/MyTeam" styles={styles}>
          Myteam
        </NavLink>
      </header>
      <Outlet />
    </>
  );
};
