import React from "react";
import "./Cards.css";
import { CardsData } from "../../data/Data";
import Card from "../Card/Card";

function Cards() {
  return (
    <div className="Cards">
      {CardsData.map((card, index) => {
        return (
          <div className="parentContainer" key={card.id}>
            <Card
              key={card.id}
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
