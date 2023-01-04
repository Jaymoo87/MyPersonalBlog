import React, { useState } from "react";
import {} from "react-router-dom";
import { NavLink, Link } from "react-router-dom";

const dropDownItems = [
  {
    title: "Contact",
    path: "/contact",
    clName: "dropdown-link",
  },
  {
    title: "Donate",
    path: "/donate",
    clName: "dropdown-link",
  },
];

const Dropdown = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <ul onClick={handleClick} className={click ? "dropdown-menu clicked" : "dropdown-menu"}>
      {dropDownItems.map((item, index) => {
        <li key={index}>
          <Link to={item.path} className={item.clName} onClick={() => setClick(false)}>
            {item.title}
          </Link>
        </li>;
      })}
    </ul>
  );
};

export default Dropdown;
