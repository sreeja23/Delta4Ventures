import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./MainHeader.css";
import { NavRoutes } from "./NavRoutes";
import Dropdown from "../pages/Dropdown";
const MainHeader = () => {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnterHandler = (name) => {
    setDropdown(name);
  };

  const onMouseLeaveHandler = () => {
    setDropdown(false);
  };
  return (
    <header className="header">
      <nav>
        <ul>
          {NavRoutes.map((item, index) => {
            return (
              <li
                key={index}
                onMouseEnter={() => {
                  onMouseEnterHandler(item.name);
                }}
                onMouseLeave={onMouseLeaveHandler}
              >
                <NavLink to={item.path} className="nav-links">
                  {item.title} <i className="fa-caret-down" />
                  {dropdown === item.name && item.subRoutes && (
                    <Dropdown subPages={item.subRoutes} />
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
