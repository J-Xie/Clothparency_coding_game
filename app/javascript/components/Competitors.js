import React from "react";

const Competitors = ({ competitors }) => (
  <div className="container">
    <h1>Liste des compétiteurs disponibles</h1>
    <div className="flex">
      {competitors.map(competitor => (
        <div key={competitor.id} className="card">
          <p>Nom: {competitor.name}</p>
          <div>
            <span>
              Catégorie(s) favorite(s):{" "}
              <p>{competitor.items.map(item => `${item.name} `)}</p>
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Competitors;
