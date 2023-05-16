import styled from "styled-components";

export const StyledSinglePoke = styled.main`
  background-image: url("/src/assets/pattern_circles-7_1_2_0-0_0_1__ffffff_dedede.png");
  background-repeat: repeat-y;
  background-repeat: repeat-x;

  .pokedex-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .gameboy {
    width: 50vw;
    height: 60vh;
    margin-top: 2rem;
    background-image: url("/src/assets/gameboyAdvanceFrame.png");
    background-size: cover; /* Updated to cover */
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .pokedex-screen {
    width: 50%;
    height: 77%;

    border-radius: 4rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-image: url("/src/assets/cityBackground.gif");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 5rem 5rem 10rem 10rem;
  }

  .main-pokemon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .main-pokemon-title {
    color: #ffcc00;
    font-size: 3rem;
    text-transform: capitalize;
    -webkit-text-fill-color: #ffcc00;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #fb1b1b;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;

  }

  .main-pokemon-img {
    width: 50%;
    background-color: rgba(223, 223, 223, 0.5);
    padding: 0.5rem 1rem;
    border-radius: 30%;
    border: 1px solid #0075BE;
  }
  .description-info {
    background-image: url("/src/assets/text-box-pokmon.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    margin-left: auto;
    margin-right: auto;
    width: 20vw;
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .description-info p {
    font-size: 1.2rem;
    width: 70%;
    text-align: center;
    margin: 0;
    padding: 0;
  }

  .type-info {
    color: #ffcc00;
    font-size: 1.5rem;
    text-transform: capitalize;
    margin: 0;
    padding: 0;
    -webkit-text-fill-color: #ffcc00;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #0075be;
  }

  .additional-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .add-info-title {
    color: #ffcc00;
    font-size: 3.2rem;
    text-transform: capitalize;
    -webkit-text-fill-color: #ffcc00;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #0075BE;
    background-color: rgba(223, 223, 223, 0.7);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid #0075BE;
    
  }

  .evolution-chain-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .evolution-pokemon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 3rem;
  }

  .evolution-pokemon img {
    width: 150px;
  }

  .evolution-name{
    color: #ffcc00;
    font-size: 2.5rem;
    text-transform: capitalize;
    -webkit-text-fill-color: #ffcc00;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #0075BE;
    background-color: rgba(223, 223, 223, 0.7);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid #0075BE;
  }
`;
