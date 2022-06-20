import React, { useState } from "react";
import "./Card.css";

export default function Card({ cardData }) {
  const { ingredient, list, weight, isDisabled, selectedPhrase } = cardData;
  const [isSelect, setIsSelect] = useState(false);
  const [isHoverBlock, setIsHoverBlock] = useState(true);
  const descriptionList = list.map((item, i) => {
    return (
      <li key={i} className="card__list-item">
        <span className="card__list-item-description">{item}</span>
      </li>
    );
  });
  // Кликаем - true, уводим мышку - false
  function onCardSelect() {
    setIsSelect(!isSelect);
    if (isSelect) setIsHoverBlock(true);
  }

  const createCardClassName = () => {
    if (isSelect) {
      if (isHoverBlock) return "selected-block";
      return "selected";
    }
    if (isDisabled) return "disabled";
    return "card";
  };

  function createDescriptionPhrase() {
    if (isSelect)
      return <span className="card__description">{selectedPhrase}</span>;
    if (isDisabled)
      return (
        <span className="card__description card__description--disabled">
          Печалька, с {ingredient} закончился.
        </span>
      );
    return (
      <span className="card__description">
        Чего сидишь? Порадуй котэ,{" "}
        <span onClick={onCardSelect} className="card__description-link">
          купи.
        </span>
      </span>
    );
  }

  function onCardMouseOut() {
    if (isHoverBlock) setIsHoverBlock(false);
  }

  return (
    <div className="card__wrapper">
      <div
        onClick={onCardSelect}
        onMouseLeave={onCardMouseOut}
        className="card"
        id={createCardClassName()}
      >
        {isDisabled ? <div className="card__disabled"></div> : null}
        <span className="card__subtitile">Сказочное заморское яство</span>
        <h3 className="card__title">
          Нямушка<span className="card__title-description">с {ingredient}</span>
        </h3>
        <ul className="card__list">{descriptionList}</ul>
        <div className="card__weight">
          <span className="card__weight-value">{weight}</span>
          <span className="card__weight-units">кг</span>
        </div>
      </div>
      {createDescriptionPhrase()}
    </div>
  );
}
