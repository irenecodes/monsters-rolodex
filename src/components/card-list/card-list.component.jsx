import React from "react";
import "./card-list.styles.css";

// components
import { Card } from "../card/card.component";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        //   place key in parent that is being iterated
        <Card key={monster.id} monster={monster}></Card>
      ))}
    </div>
  );
};
