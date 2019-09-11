import React from "react";
import Button from "./Button";

const Competitions = ({ competitionsMap }) => {
  const onClick = competitionId => {
    fetch(`/competition/show/${competitionId}`).then(
      () => (window.location.href = `/competition/show/${competitionId}`)
    );
  };

  return (
    <div className="container">
      <h1>Compétitions créer jusque là</h1>
      <div className="choice_container">
        <div className="choice_list">
          {Object.keys(competitionsMap).map(competitionKey => (
            <div key={competitionKey} className="card">
              <p className="title">
                Competition de la semaine {competitionKey}
              </p>
              {competitionsMap[competitionKey].map(item => (
                <p key={item.id}>
                  Catégorie #{item.id}: {item.name}
                </p>
              ))}
              <Button onClick={() => onClick(competitionKey)}>
                Voir les détails
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Competitions;
