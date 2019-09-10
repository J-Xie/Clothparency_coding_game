import React, { useState, useMemo, useCallback } from "react";
import Button from "./Button";
import ExtraPage from "./ExtraPage";

const useCategoryList = () => {
  return useMemo(() => {}, []);
};

const ChiefOfHappiness = ({ competition, items, competitorsMap }) => {
  const [message, setMessage] = useState("");
  const [selectedCompetitors, setSelectedCompetitors] = useState({});

  useCategoryList();

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
      const duplicate = Object.values(selectedCompetitors).some(
        ({ competitor }) => {
          if (competitor !== competitorId) {
            return true;
          }
          return false;
        }
      );
      const items = {
        ...selectedCompetitors,
        [itemId]: {
          ...selectedCompetitors[itemId],
          competitor: competitorId
        }
      };
      console.log(duplicate);
      // if (duplicate) {
      //   const item = selectedCompetitors.find(
      //     item => item.id !== itemId && competitorId === item.competitor
      //   );
      //   items = {
      //     ...items,
      //     [item.id]: {
      //       ...selectedCompetitors[item.id],
      //       competitor: -1
      //     }
      //   };
      // }
      setSelectedCompetitors(items);
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
    console.log(selectedCompetitors);

    fetch("/competition/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        items: selectedCompetitors
      })
      //   body: JSON.stringify({
      //     items: {
      //       fraise: {
      //         competitor: "id",
      //         extra: "id"
      //       }
      //     }
      //   })
    });
  }, [selectedCompetitors]);
  console.log(selectedCompetitors);

  return (
    <div className="container">
      {!competition && <div>Aucune compétition n'as été crée</div>}
      {Boolean(competition) && (
        <React.Fragment>
          <h1>
            Veuillez choisir un (le meilleur) competiteur pour chaque
            competition
          </h1>
          <h2>Les competitions de la semaine :</h2>
          <div className="choice_container">
            <div className="flex">
              {items.map(item => (
                <div key={item.id}>
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
                      <p>Customization</p>
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
