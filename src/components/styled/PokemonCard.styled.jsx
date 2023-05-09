import styled from "styled-components";

export const StyledPokemonCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .poke-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20vw;
    margin: 1em;
    border: 1px solid black;
    border-radius: 2rem;
  }

  .poke-image {
    width: 150px;
  }

  .poke-info {
    font-size: 2rem;
  }
`;

export const StyledPokemonList = styled.section`
  width: 90vw;
  margin: 1em auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
