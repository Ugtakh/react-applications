import React from "react";

const MenuItem = (props) => {
  return (
    <a className="NavItem" href="#">
      {props.name}
    </a>
  );
};

export default MenuItem;
