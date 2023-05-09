import React from "react";
import { StyledPokemonCard } from "./styled/PokemonCard.styled";

function PokemonCard({ name, image, types }) {
  const typeHandler = () => {
    if (types[1]) {
      return `${types[0].type.name} | ${types[1].type.name}`;
    }
    return `${types[0].type.name}`;
  };

  return (
    
      <StyledPokemonCard>
        <div className="poke-card">
          <img className="poke-image" src={image} alt={`${name}-image`}></img>
          <article className="poke-info">
            <h3>{name}</h3>
            <h3>{typeHandler()}</h3>
          </article>
        </div>
      </StyledPokemonCard>

  );
}

export default PokemonCard;
