import React from "react";

const Categories = ({ items }) => (
  <div className="container">
    <h1>Liste des compétiteurs disponibles</h1>
    <div className="flex">
      {items.map(item => (
        <div key={item.id} className="card">
          <p>Catégorie #{item.id}</p>
          <p>Nom: {item.name}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Categories;
