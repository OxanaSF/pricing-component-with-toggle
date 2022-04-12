import React from "react";
import Card from "./Card";
import classes from "./CardDisplay.module.css";
import { cards } from "./data";

const CardDisplay = () => {
  return (
    <div className={classes.cardDisplay}>
      {cards.map((card) => (
        <Card
          name={card.name}
          price={card.price}
          storage={card.storage}
          numberUsers={card.numberUsers}
          sendUp={card.sendUp}
          styleCardName={card.styleCardName}
          cardContentTop={card.cardContentTop}
          cardContent={card.cardContent}
          cardContentDollar={card.cardContentDollar}
        />
      ))}
    </div>
  );
};

export default CardDisplay;
