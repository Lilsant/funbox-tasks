import React from "react";
import Card from "../Card/Card";
import "./CardsWrapper.css";

export default function CardsWrapper({ cardsData }) {
  const cards = cardsData.map((card, i) => {
    return <Card key={i} cardData={card} />;
  });
  return (
    <>
      <h1 className="title">Ты сегодня покормил кота?</h1>
      <div className="cards__wrapper">{cards}</div>;
    </>
  );
}
