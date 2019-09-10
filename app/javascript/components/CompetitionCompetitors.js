import React from "react";

const CompetitionCompetitors = ({ competitionsMap }) => (
  <ul className="width_600">
    {competitionsMap.map(competition => (
      <li key={competition.id} className="margin_bottom">
        <p>Categorie: {competition.itemName}</p>
        {competition.extraName !== "" && <p>Extra : {competition.extraName}</p>}
        <p>Competiteur: {competition.competitorName}</p>
      </li>
    ))}
  </ul>
);

export default CompetitionCompetitors;
