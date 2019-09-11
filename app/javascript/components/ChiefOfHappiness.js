import React, { useState, useMemo, useCallback } from "react";
import Button from "./Button";

const ChiefOfHappiness = ({ competition, items, competitorsMap }) => {
  const [message, setMessage] = useState("");
  const [selectedCompetitors, setSelectedCompetitors] = useState({});

  const disabled = useMemo(() => {
    let res = true;
    if (items) {
      res = items.some(({ id, extras }) => {
        if (
          !selectedCompetitors[id] ||
          !selectedCompetitors[id].competitor ||
          (extras.length > 0 && !selectedCompetitors[id].extra)
        ) {
          return true;
        }
        return false;
      });
    }
    return res;
  }, [selectedCompetitors]);

  const onChange = useCallback(
    (itemId, competitorId) => {
      setSelectedCompetitors({
        ...selectedCompetitors,
        [itemId]: {
          ...selectedCompetitors[itemId],
          competitor: competitorId
        }
      });
    },
    [selectedCompetitors]
  );

  const setExtra = useCallback(
    (itemId, extraId) => {
      setSelectedCompetitors({
        ...selectedCompetitors,
        [itemId]: {
          ...selectedCompetitors[itemId],
          extra: extraId
        }
      });
    },
    [selectedCompetitors]
  );

  const onSubmit = useCallback(() => {
    fetch("/competition/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        items: selectedCompetitors
      })
    }).then(res => {
      if (res.status === 200) {
        setMessage(
          "Les compétiteurs et extras ont été défini pour la compétition actuelle"
        );
      }
    });
    setSelectedCompetitors({});
  }, [selectedCompetitors]);

  return (
    <div className="container">
      {!competition && <h3>Aucune compétition n'as été crée</h3>}
      {Boolean(competition) && (
        <React.Fragment>
          <h1>
            Veuillez choisir un (le meilleur) competiteur pour chaque catégorie
          </h1>
          <p className="success_message">{message}</p>
          <h2>Les catégories disponibles :</h2>
          <div className="choice_container">
            <div className="flex">
              {items.map(item => (
                <div key={item.id} className="select_box">
                  <p className="button_label">{item.name}</p>
                  {item.competitorsId.map(competitorId => (
                    <Button
                      key={competitorId}
                      onClick={() => onChange(item.id, competitorId)}
                      type={
                        selectedCompetitors[item.id] &&
                        selectedCompetitors[item.id].competitor === competitorId
                          ? "positive"
                          : "primary"
                      }
                    >
                      {competitorsMap[competitorId].name}
                    </Button>
                  ))}
                  {item.extras.length > 0 && (
                    <div className="inline_block">
                      <p>Customisation</p>
                      {item.extras.map(extra => (
                        <Button
                          className="extra_button"
                          key={extra.id}
                          type={
                            selectedCompetitors[item.id] &&
                            selectedCompetitors[item.id].extra === extra.id
                              ? "positive"
                              : "primary"
                          }
                          onClick={() => setExtra(item.id, extra.id)}
                        >
                          {extra.name}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <Button disabled={disabled} rounded onClick={() => onSubmit()}>
            Valider
          </Button>
        </React.Fragment>
      )}
    </div>
  );
};

export default ChiefOfHappiness;
