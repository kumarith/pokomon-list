import React, { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Catalog } from "./components/Catalog/Catalog";
import { PokemonObj } from "./services/pokomoninterface";
import {
  
  Pokemon,
  discoverAllPokemons,
  PokemonList,
  mapPokemons,
} from "./services/pokemon.service";
import { PokemonContext } from "./services/context";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .get<PokemonList>("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => {
        
        let promises = response.data.results.map((result) => {
          console.log("calling"+result.url);
           axios.get<PokemonObj>(result.url);
           
        });
        Promise.all(promises).then(( allPokemondata => console.log("-- "+allPokemondata) )
        );
      });
  }, []);

  const [pokemon, setPokemon] = useState<PokemonObj[]>([]);

  return (
    <PokemonContext.Provider value={{ pokemon }}>
      <div className="App">
        <Header></Header>
        <Catalog></Catalog>
      </div>
    </PokemonContext.Provider>
  );
}

export default App;
