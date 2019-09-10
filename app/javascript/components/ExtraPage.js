import React, { useState } from "react";

const Extras = ({ itemName, extras, onClick, type }) => (
  <div>
    <p>{itemName}</p>
    {extras.map(extra => (
      <Button key={extra.id} type={type} onClick={onClick}>
        {extra.name}
      </Button>
    ))}
  </div>
);

const ExtraPage = ({ items, onClick, type }) => {
  const [selectedExtra, setSelectedExtra] = useState("");

  return (
    <div className="choice_container">
      <p>Selectionner un extra pour les categories suivantes :</p>
      {items.map(item => (
        <Extras itemName={item.name} extras={item.extras} onClick={onClick} />
      ))}
    </div>
  );
};

export default ExtraPage;
