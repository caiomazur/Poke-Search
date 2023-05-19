import styled from "styled-components";

export const StyledPokemonCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .poke-card {
    background-color: rgba(10, 40, 95, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 15vw;
    min-width: 230px;
    height: 30vh;
    min-height: 230px;
    margin: 1rem;
    border: 1px solid #0075be;
    border-radius: 2rem;
    transition: transform 0.3s ease-in-out;
  }

  .poke-card:hover {
    transform: scale(1.05);
    background-color: rgba(255, 204, 0, 0.2);
  }

  .poke-image {
    width: 150px;
  }

  .poke-info {
    text-align: center;
    font-size: 2rem;
    text-decoration: none;
    text-transform: capitalize;
    font-family: "Press Start 2P", cursive;
  }

  .poke-info h3 {
    text-align: center;
    font-size: 1.5rem;
    text-decoration: none;
    text-transform: capitalize;
    font-family: "Press Start 2P", cursive;
  }

  .poke-info h4 {
    text-align: center;
    font-size: 1rem;
    text-decoration: none;
    text-transform: capitalize;
    font-family: "Press Start 2P", cursive;
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
