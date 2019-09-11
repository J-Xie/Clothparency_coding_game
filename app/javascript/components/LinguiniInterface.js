import React, { useState, useEffect, useMemo } from "react";
import Button from "./Button";
import { EROFS } from "constants";

const LinguiniInterface = ({ items }) => {
  const [message, setMessage] = useState("");
  const [selectedItems, setSelectedItems] = useState({});

  const disabled = useMemo(() => {
    if (Object.values(selectedItems).find(item => item === true)) {
      return false;
    }
    return true;
  }, [selectedItems]);

  const onChange = itemId => {
    setSelectedItems({
      ...selectedItems,
      [itemId]: !selectedItems[itemId]
    });
  };
  const onSubmit = () => {
    const itemKeys = [];
    Object.keys(selectedItems).forEach(key => {
      if (selectedItems[key]) {
        itemKeys.push(key);
      }
    });
    fetch("/competition/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        itemKeys
      })
    }).then(res => {
      if (res.status === 200) {
        setMessage("Une compétition avec ces catégories a été crée");
      }
    });
    setSelectedItems({});
  };

  return (
    <div className="container">
      {message && <p className="success_message">{message}</p>}
      <h1>Choisissez les catégories à évaluer cette semaine</h1>
      <div className="choice_container">
        <div>
          <div className="choice_list">
            {items.map(item => (
              <Button
                key={item.id}
                onClick={() => onChange(item.id)}
                type={selectedItems[item.id] ? "positive" : "primary"}
              >
                {item.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <Button disabled={disabled} rounded onClick={onSubmit}>
        Valider
      </Button>
    </div>
  );
};

export default LinguiniInterface;
