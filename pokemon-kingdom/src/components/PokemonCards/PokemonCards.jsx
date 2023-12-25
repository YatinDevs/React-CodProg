import React, { useState, useEffect } from "react";
import { fetchPokemons } from "../../utils/api";
import PokemonCard from "./PokemonCard";
import "../../App.css";

function PokemonCards() {
  const [offset, setOffset] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    fetchPokemons(offset, 20).then((data) => {
      console.log("All-Pokemon-Data ->", data);
      setPokemons((prev) => {
        // console.log(...data.results);
        if (prev) {
          return [...prev, ...data.results];
        }
        return [...data.results];
      });
    });
  }, []);

  //   console.log(pokemons);
  // console.log("single-Pokemon-map ->", pokemon);
  return (
    <div className="all-container">
      {pokemons &&
        pokemons?.map((pokemon) => (
          <PokemonCard pokemonUrl={pokemon.url} key={pokemon.name} />
        ))}
    </div>
  );
}

export default PokemonCards;
