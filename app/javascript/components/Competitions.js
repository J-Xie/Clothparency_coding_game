import React, { useCallback, useMemo } from "react";
import { get } from "lodash";
import Button from "./Button";

const Competitions = ({ competitionsMap }) => {
  const competitionKeys = useMemo(() => {
    Object.keys(competitionsMap);
  }, [competitionsMap]);

  const onClick = useCallback(
    competitionId => {
      fetch(`/competition/show/${competitionId}`).then(
        () => (window.location.href = `/competition/show/${competitionId}`)
      );
    },
    [competitionsMap]
  );

  return (
    <div className="container">
      {!competitionKeys && <h3>Aucune compétition n'a été créer</h3>}
      {competitionKeys && competitionKeys.length > 0 && (
        <React.Fragment>
          <h1>Compétitions créer jusque là</h1>
          <div className="choice_container">
            <div className="choice_list">
              {competitionsKeys.map(competitionKey => (
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
        </React.Fragment>
      )}
    </div>
  );
};

export default Competitions;
