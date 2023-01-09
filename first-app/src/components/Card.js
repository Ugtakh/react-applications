import React from "react";

const Card = ({ card }) => {
  return (
    <div className="card">
      <img src={card.image} alt="" />
      <p>{card.date}</p>
      <h5 className="font18 pink">{card.title}</h5>
      <p>{card.text}</p>
      <a className="pink" href={card.link}>
        LEARN MORE
      </a>
    </div>
  );
};

export default Card;
