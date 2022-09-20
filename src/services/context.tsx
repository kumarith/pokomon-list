import React from "react";

import { Pokemon } from "./pokemon.service";
import { PokemonObj } from "./pokomoninterface";



export const PokemonContext = React.createContext<{
  pokemon: PokemonObj[];
  
}>({
  pokemon: [],
 
});

