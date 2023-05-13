import styled from "styled-components";

export const StyledPokemonCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .poke-card {
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20vw;
    margin: 1em;
    border: 1px solid black;
    border-radius: 2rem;
    transition: transform 0.3s ease-in-out;
  }

  .poke-card:hover {
    transform: scale(1.05);
  }

  .poke-image {
    width: 150px;
  }

  .poke-info {
    font-size: 2rem;
    text-decoration: none;
  }
`;

export const StyledPokemonList = styled.section`
  width: 90vw;
  margin: 1em auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .link {
    text-decoration: none;
    color: #000000;
  }
`;
