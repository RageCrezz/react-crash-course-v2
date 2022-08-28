import React from "react";

export default function PokemonList({ id, name, img, type, typeColor }) {
  return (
    <div className="pokemon-card">
      <div className="pokemon-number" style={{ backgroundColor: typeColor }}>
        <small>#0{id}</small>
      </div>

      <img className="pokemon-sprite" src={img} alt={img} />

      <div className="detail-wrapper">
        <h3>{name}</h3>
        <small className="type-list">
          <p>Type: </p>
          {type}
        </small>
      </div>
    </div>
  );
}
