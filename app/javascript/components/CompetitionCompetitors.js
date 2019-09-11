import React from "react";
import { get } from "lodash";

const CompetitionCompetitors = ({ competitionsMap }) => (
  <div className="container">
    {!competitionsMap && <h3>Aucune competitions à afficher</h3>}
    {competitionsMap &&
      competitionsMap.map(competition => (
        <div key={competition.id} className="card margin_bottom">
          <p>
            Categorie #{competition.id}: {get(competition, "itemName")}
          </p>
          {competition.extraName !== "" && (
            <p>Extra : {get(competition, "extraName")}</p>
          )}
          <p>Competiteur: {get(competition, "competitorName")}</p>
        </div>
      ))}
  </div>
);

export default CompetitionCompetitors;
