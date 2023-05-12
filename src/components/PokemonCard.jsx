import React, { useState } from "react";
import { StyledPokemonCard } from "./styled/PokemonCard.styled";

function PokemonCard({ name, image, types, imageShiny }) {
  const [isHovered, setIsHovered] = useState(false);

  const typeHandler = () => {
    if (types[1]) {
      return `${types[0].type.name} | ${types[1].type.name}`;
    }
    return `${types[0].type.name}`;
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <StyledPokemonCard
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      isHovered={isHovered}
    >
      <div className="poke-card">
        <img
          className="poke-image"
          src={isHovered ? imageShiny : image}
          alt={`${name}-image`}
        ></img>
        <article className="poke-info">
          <h3>{name}</h3>
          <h4>{typeHandler()}</h4>
        </article>
      </div>
    </StyledPokemonCard>
  );
}

export default PokemonCard;
