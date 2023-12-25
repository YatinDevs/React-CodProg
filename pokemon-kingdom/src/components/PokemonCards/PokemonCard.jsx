import React, { useState, useEffect } from "react";
import { fetchDataFromApi } from "../../utils/api";
import "../../App.css";
import Button from "../Button/Button";

function PokemonCard({ pokemonUrl }) {
  //   console.log("Single-Pokemon-URL", pokemonUrl);
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    fetchDataFromApi(pokemonUrl).then((pokemon) => {
      setPokemon(pokemon);
    });
  }, []);

  return (
    <>
      {pokemon && (
        <div className={`thumb-container ${pokemon.types[0].type.name}`}>
          <div className="number">
            <small>#{pokemon.id}</small>
          </div>
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
          />
          <div className={`detail-wrapper `}>
            <h3>{pokemon.name.toUpperCase()}</h3>
            <small>Type: {pokemon.types[0].type.name}</small>

            <Button className={`${pokemon.types[0].type.name}`}>
              Know more...
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default PokemonCard;
