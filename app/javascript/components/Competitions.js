import React from "react";
import Button from "./Button";

const Competitions = ({ competitionsMap }) => (
  <div className="container">
    <ul className="choice_container">
      {competitionsMap.map(competition => (
        <li key={competition.id}>
          <p>Competition de la semaine {competition.id}</p>
          <Button>Voir plus</Button>
        </li>
      ))}
    </ul>
  </div>
);

export default Competitions;
