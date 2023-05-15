import styled from "styled-components";

export const StyledSinglePoke = styled.section`
  .pokedex {
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url("/src/assets/gameboyAdvanceFrame.png");
    background-size: contain;
    background-repeat: no-repeat;
    width: 100vw;
  }

  .pokedex-screen {
    margin-top: 15rem;
    border-radius: 1em;
    text-align: center;
    height: 70vh;
    width: 44vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url("/src/assets/cityBackground.gif");
    background-size: cover;
    background-repeat: no-repeat;
  }

  .single-poke-title {
    color: #ffcc00;
    margin-top: 8rem;
    font-size: 3.5rem;
    text-transform: capitalize;
    -webkit-text-fill-color: #ffcc00;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #0075be;
  }

  .single-poke-img {
    width: 200px;
  }

  .poke-info {
    background-image: url("/src/assets/text-box-pokmon.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 46vw;
    height: 25vh;
    margin-bottom: 3rem;
  }

  .type-info {
    color: #ffcc00;
    font-size: 2rem;
    text-transform: capitalize;
    margin: 0;
    padding: 0;
    -webkit-text-fill-color: #ffcc00;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #0075be;
  }

  .poke-info p {
    font-size: 1.5rem;
    width: 35vw;
    text-align: center;
    margin-left: 7rem;
    padding-top: 5rem;
  }

  .evolution-chain {
    margin-top: 25rem;
  }

  .evolution-container img {
    width: 150px;
  }

  .evolution-container h3 {
    font-size: 1.5rem;
  }
`;
