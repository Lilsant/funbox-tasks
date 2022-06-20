import React from "react";
import CardsWrapper from "./components/CardsWrapper/CardsWrapper";
import "./App.css";
export default function App() {
  const cardsData = [
    {
      ingredient: "фуа-гра",
      list: ["10 порций", "мышь в подарок"],
      weight: 0.5,
      isDisabled: false,
      selectedPhrase: "Печень утки разварная с артишоками.",
    },
    {
      ingredient: "рыбой",
      list: ["40 порций", "2 мыши в подарок"],
      weight: 2,
      isDisabled: false,
      selectedPhrase: "Головы щучьи с чесноком да свежайшая сёмгушка.",
    },
    {
      ingredient: "курой",
      list: ["100 порций", "5 мышей в подарок", "заказчик доволен"],
      weight: 2,
      isDisabled: true,
      selectedPhrase: "Филе из цыплят с трюфелями в бульоне.",
    },
  ];
  return (
    <div className="app">
      <CardsWrapper cardsData={cardsData} />
    </div>
  );
}
