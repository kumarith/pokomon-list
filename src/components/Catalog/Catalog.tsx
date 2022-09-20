import React, { useContext } from "react";
import "./Catalog.css";
import imgPlaceholder from "./poko_placeholder.jpeg";
import { PokemonContext } from "../../services/context";


export const Catalog = () => {
  const { pokemon } = useContext(PokemonContext);

  return (
    <div className="catalogContainer">
      {pokemon.map((pokemon) => (
        <div className="catalog__item" key={pokemon.height}>
          <div className="catalog__item__img">
            <img src={pokemon.sprites.other["official-artwork"].front_default } alt={pokemon.species.name} />
            <div className="catalog__item__resume">{pokemon.species.name}</div>
          </div>
          <div className="catalog__item__footer">
            <div className="catalog__item__footer__name">
              {pokemon.height} 
            </div>
            <div className="catalog__item__footer__rating">{pokemon.weight}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
