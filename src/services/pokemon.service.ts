import axios from "axios";



/**
 * 
 * Interfaces
 * 
 */

interface Ability {
  ability: {
    name: string;
  };
}

interface Move {
  move: {
    name: string;
  };
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
  };
}

interface Type {
  type: {
    name: string;
  };
}

export interface Pokemon {

  abilities: Ability[];
  moves: Move[];
  stats: Stat[];
  types: Type[];
  base_experience: number;
  height: number;
  weight: number;
  species: Species[];
  forms: Forms[];
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
}

export interface PokemonList {
  results: PokemonItem[];

}

interface Species {
  name: string;
  url: string;

}

interface Forms {
  name: string;
  url: string;

}

interface PokemonItem {
  name: string;
  url: string;

}


export function discoverAllPokemons() {
  axios.get<PokemonList>("https://pokeapi.co/api/v2/pokemon/").then(response => {
    let promises = response.data.results.map(result => {
      return axios.get(result.url);
    })
    Promise.all(promises).then(response => {

      return mapPokemons(response);
    }).catch((_) => {
      return [];
    });

  });

}


export function mapPokemons(res: any[]): Pokemon[] {
  return res.map((pokemon) => {
    const {

      forms,
      height,
      weight,
      sprites,
      abilities,
      moves,
      stats,
      types,
      base_experience,
      species,

    } = pokemon;

    return {

      forms,
      height,
      weight,
      sprites,
      abilities,
      moves,
      stats,
      types,
      base_experience,
      species
    };
  });
}



