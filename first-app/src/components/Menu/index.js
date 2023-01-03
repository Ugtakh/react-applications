import React from "react";
import MenuItem from "../MenuItem";

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
    <div>
      <ul>
        {menus.map((menu) => (
          <MenuItem name={menu} />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
