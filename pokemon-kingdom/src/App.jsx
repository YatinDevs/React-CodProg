import React, { useEffect } from "react";
import "./App.css";
import { Header, PokemonCards, Button } from "./components";
import { fetchDataFromApi } from "./utils/api";

export default function App() {
  const handleClick = () => {
    console.log("btn clicked");
  };

  useEffect(() => {}, []);
  return (
    <div id="parent">
      <div className="app-container">
        <Header title={"POKEMON KINGDOM"} />
        <div className="pokemon-container">
          <PokemonCards />
        </div>
        <Button onClick={handleClick} className={`load-more`}>
          Load More
        </Button>
      </div>
    </div>
  );
}
