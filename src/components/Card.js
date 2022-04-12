import React from "react";
import "./Card.css";
import ButtonPurple from "./buttons/ButtonPurple";
import ButtonWhite from "./buttons/ButtonWhite";

const Card = (props) => {
  return (
    <div className={props.styleCardName}>
      <div className={props.cardContentTop}>{props.name}</div>

      <div className={props.cardContentDollar}>{props.price}</div>

      <div className={props.cardContent}>{props.storage}</div>

      <div className={props.cardContent}>{props.numberUsers}</div>

      <div className={props.cardContent}>{props.sendUp}</div>

      {props.id === 2 ? <ButtonWhite /> : <ButtonPurple />}
    </div>
  );
};

export default Card;
