import React from "react";
import PlantCard from "./PlantCard";

function PlantList({displayItems}) {
  return (
    <ul className="cards">
      {displayItems.map(item => {
        return (
          <PlantCard key={item.id} item={item} />
        )
      })}
      </ul>
  );
}

export default PlantList;
