import React from "react";
import CardItem from "./Card";
import "./cardList.css";

const CardList = ({ users }) => {
  return (
    <div className="row">
      {users.map((user) => (
        <CardItem user={user} />
      ))}
    </div>
  );
};

export default CardList;
