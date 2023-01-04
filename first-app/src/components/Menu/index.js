import React from "react";
import MenuItem from "../MenuItem";
import "./styles.css";

const menus = [
  "Portfolio",
  "Blog",
  "CV",
  "Stor",
  "Freelance",
  "About Me",
  "Contact",
];
const Menu = () => {
  return (
    <div className="NavMenu">
      {menus.map((menu) => (
        <MenuItem key={menu} name={menu} />
      ))}
    </div>
  );
};

export default Menu;
