import React, { useState, useEffect } from "react";
import Pokemon from "../components/Pokemon/PokemonList";

export default function Pokedex() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const [startPokedex, setStartPokedex] = useState(false);

  const getAllPokemon = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(result) {
      result.forEach(async (p) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${p.name}`);
        const data = await res.json();

        setPokemonList((currentList) => [...currentList, data]);
      });
    }

    createPokemonObject(data.results);
  };

  function showPokedex() {
    setStartPokedex((current) => !current);
    getAllPokemon();
  }

  useEffect(() => {
    getAllPokemon();
  }, []);

  if (!startPokedex)
    return (
      <div className="pokedex-offline-landing">
        <h1>Start the PokéDex!</h1>

        <div className="pokeball">
          <button
            className="pokeball-start"
            onClick={() => showPokedex()}
          ></button>
          <span className="pokeball-center-bg"></span>
        </div>
      </div>
    );

  return (
    <div className="pokedex-landing">
      <h1>Pokédex</h1>

      <div className="pokemon-grid">
        {pokemonList
          .sort((p1, p2) => (p1.id > p2.id ? 1 : -1))
          .map((p, ascIndex) => {
            const pokemonType = p.types[0].type.name;
            let typeColor = "";

            if (pokemonType === "normal") {
              typeColor = "#A8A77A";
            } else if (pokemonType === "fire") {
              typeColor = "#EE8130";
            } else if (pokemonType === "water") {
              typeColor = "#6390F0";
            } else if (pokemonType === "electric") {
              typeColor = "#F7D02C";
            } else if (pokemonType === "grass") {
              typeColor = "#7AC74C";
            } else if (pokemonType === "ice") {
              typeColor = "#96D9D6";
            } else if (pokemonType === "fighting") {
              typeColor = "#C22E28";
            } else if (pokemonType === "poison") {
              typeColor = "#A33EA1";
            } else if (pokemonType === "ground") {
              typeColor = "#E2BF65";
            } else if (pokemonType === "flying") {
              typeColor = "#A98FF3";
            } else if (pokemonType === "psychic") {
              typeColor = "#F95587";
            } else if (pokemonType === "bug") {
              typeColor = "#A6B91A";
            } else if (pokemonType === "rock") {
              typeColor = "#B6A136";
            } else if (pokemonType === "ghost") {
              typeColor = "#735797";
            } else if (pokemonType === "dragon") {
              typeColor = "#6F35FC";
            } else if (pokemonType === "dark") {
              typeColor = "#705746";
            } else if (pokemonType === "steel") {
              typeColor = "#B7B7CE";
            } else if (pokemonType === "fairy") {
              typeColor = "#C685AD";
            } else typeColor = "white";

            return (
              <Pokemon
                id={p.id}
                name={p.name}
                type={p.types.map((type, index) => (
                  <p className="typeof-pokemon" key={index}>
                    {type.type.name}
                  </p>
                ))}
                typeColor={typeColor}
                img={p.sprites.other.dream_world.front_default}
                key={ascIndex}
              />
            );
          })}
      </div>
      <div className="paginator">
        <button onClick={() => getAllPokemon()}>Load More</button>
      </div>
    </div>
  );
}
