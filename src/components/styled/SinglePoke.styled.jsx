import styled from "styled-components";

export const StyledSinglePoke = styled.main`
  background-image: url("/images/pattern_circles-7_1_2_0-0_0_1__ffffff_dedede.png");
  background-repeat: repeat-y repeat-x;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .pokedex-page {
    width: 90vw;
    background-color: rgba(223, 223, 223, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .gameboy {
    width: 60vw;
    height: 72vh;
    min-width: 600px;
    margin-top: 3rem;
    background-image: url("/images/gameboyAdvanceFrame.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .pokedex-screen {
    width: 49%;
    height: 77%;
    min-width: 450px;

    border-radius: 4rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-image: url("/images/cityBackground.gif");
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
    min-width: 180px;
    background-color: rgba(223, 223, 223, 0.5);
    padding: 0.5rem 1rem;
    border-radius: 30%;
    border: 1px solid #0075be;
    animation: jump 0.6s infinite alternate;
  }

  @keyframes jump {
    0% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
    50% {
      box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
      transform: translatey(-15px);
    }
    100% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
  }

  .description-info {
    background-image: url("/images/text-box-pokmon.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    margin-left: auto;
    margin-right: auto;
    width: 26vw;
    height: 20vh;
    min-width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .description-info p {
    font-family: "Press Start 2P", cursive;
    line-height: 1.5;
    font-size: 0.9rem;
    width: 80%;
    text-align: center;
    margin: 0;
    padding-top: 0.5rem;
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
    -webkit-text-stroke-color: #0075be;
    background-color: rgba(223, 223, 223, 0.7);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid #0075be;
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

  .evolution-name {
    color: #0075be;
    font-size: 2rem;
    text-transform: capitalize;

    -webkit-text-stroke-width: 0.1px;
    -webkit-text-stroke-color: #000000;
    background-color: rgba(223, 223, 223, 0.7);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid #0075be;
  }

  .type-info span {
    font-family: "Press Start 2P", cursive;
  }

  .main-poke-info {
    padding: 5rem 6rem;
    line-height: 1.5;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("/images/text-box-pokmon.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
  }

  .main-poke-info h4 {
    font-family: "Press Start 2P", cursive;
    color: #00000;
    font-size: 1.3rem;
    text-transform: capitalize;
    margin: 2rem;
    padding: 0;
  }

  .pikachu-back-icon {
    background: transparent;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
    width: 100%;
  }

  .pikachu-back-icon:hover {
    transform: scale(1.2);
    animation: tilt 2s infinite linear;
  }

  @keyframes tilt {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-10deg);
    }
    50% {
      transform: rotate(-0deg);
    }
    75% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  .back-to {
    font-family: "Press Start 2P", cursive;

    text-align: center;
    text-decoration: none;
    color: #000000;
    margin-bottom: 2rem;
  }

  .footer p {
    font-size: 1rem;
    font-family: "Press Start 2P", cursive;
  }
`;
