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

    @media (max-width: 1050px) {
      width: 98vw;
    }
    @media (max-width: 650px) {
      width: 100vw;
    }
  }

  .gameboy {
    width: 75%;
    min-width: 1100px;
    padding: 5% 5%;
    margin-top: 3rem;
    background-image: url("/images/gameboyAdvanceFrame.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 1500px) {
      padding: 10% 0;
      margin-top: 1rem;
    }

    @media (max-width: 1050px) {
      background-image: url("/images/gameboyColorFrame.png");
      width: 70%;
      min-width: 700px;
      padding: 20% 0;
      justify-content: flex-start;
    }

    @media (max-width: 650px) {
      background-size: contain;
      min-width: 100%;
    }
  }

  .pokedex-screen {
    width: 50%;
    height: 80%;

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

    @media (max-width: 1050px) {
      width: 52%;
      min-width: 250px;
      height: 325px;
      max-height: 40%;
      margin-bottom: 40em;
      border-radius: 1rem;
      padding-top: 8%;
      border-radius: 1rem;
    }

    @media (max-width: 650px) {
      width: 44%;
      min-width: 150px;
      height: 200px;
      max-height: 200px;
      margin-bottom: 26em;
      max-height: 30%;
    }

    @media (max-width: 450px) {
      width: 55%;
      max-height: 170px;
      margin-bottom: 20em;
    }
  }

  .main-pokemon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 1050px) {
      margin-top: 2rem;
    }

    @media (max-width: 650px) {
      margin-top: 10rem;
    }

    @media (max-width: 450px) {
      margin-top: 18rem;
    }
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

    @media (max-width: 650px) {
      font-size: 2.3rem;
    }

    @media (max-width: 450px) {
      font-size: 1.9rem;
      padding: 0.2rem 0.7rem;
    }
  }

  .main-pokemon-img {
    width: 45%;
    min-width: 175px;
    background-color: rgba(223, 223, 223, 0.5);
    padding: 0.5rem 1rem;
    border-radius: 30%;
    border: 1px solid #0075be;
    animation: jump 0.6s infinite alternate;

    @media (max-width: 1050px) {
      width: 45%;
      min-width: 150px;
    }

    @media (max-width: 650px) {
      width: 38%;
      min-width: 120px;
      margin: 0;
    }

    @media (max-width: 450px) {
      width: 30%;
      min-width: 100px;
    }
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

    @media (max-width: 1050px) {
      width: 100%;
      min-width: 150px;
      height: 16vh;
      margin-bottom: 10%;
    }

    @media (max-width: 650px) {
      margin-bottom: 55%;
      height: 12vh;
    }

    @media (max-width: 450px) {
      margin-bottom: 110%;
      height: 15vh;
      width: 100%;
    }
  }

  .description-info p {
    font-family: "Press Start 2P", cursive;
    line-height: 1.5;
    font-size: 1rem;
    width: 80%;
    text-align: center;
    margin: 0;
    padding-top: 0.5rem;

    @media (max-width: 650px) {
      font-size: 0.7rem;
      line-height: 1.3;
      padding-top: 0;
      width: 83%;
    }

    @media (max-width: 450px) {
      font-size: 0.7rem;
      line-height: 1.2;
      width: 83%;
    }
  }

  .add-info-title {
    font-family: "Press Start 2P", cursive;
    font-size: 2em;
    margin-top: 2em;

    -webkit-text-stroke-width: 0.1px;
    -webkit-text-stroke-color: #000000;
    background-color: rgba(223, 223, 223, 0.7);
    padding: 1em 2em;
    border-radius: 0.5rem;
    border: 1px solid black;

    @media (max-width: 650px) {
      font-size: 1.5em;
    }
  }

  .additional-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .evolution-chain-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .evolution-pokemon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2em;
  }

  .evolution-pokemon img {
    width: 225px;

    @media (max-width: 650px) {
      width: 150px;
    }
  }

  .evolution-name {
    font-family: "Press Start 2P", cursive;

    color: #0075be;
    font-size: 1.8em;
    text-transform: capitalize;

    -webkit-text-stroke-width: 0.1px;
    -webkit-text-stroke-color: #000000;
    background-color: rgba(223, 223, 223, 0.7);
    padding: 1em 1em;
    border-radius: 0.5rem;
    border: 1px solid #0075be;

    @media (max-width: 650px) {
      font-size: 1.4em;
    }
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

    @media (max-width: 650px) {
      width: 60%;
    }

    @media (max-width: 450px) {
      width: 45%;
      padding: 4rem 7rem;
    }
  }

  .main-poke-info h4 {
    font-family: "Press Start 2P", cursive;
    color: #00000;
    font-size: 1.5rem;
    text-transform: capitalize;
    margin: 2rem;
    padding: 0;

    @media (max-width: 650px) {
      font-size: 1.2rem;
      width: 25%;
      margin: 1em;
      padding: 1em;
    }

    @media (max-width: 450px) {
      font-size: 1rem;
      text-align: center;
      width: 25%;
    }
  }

  .pikachu-back-icon {
    background: transparent;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
    width: 175px;
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
    font-size: 1.2rem;
    text-align: center;
    text-decoration: none;
    color: #000000;
    margin-bottom: 2rem;
  }

  .footer p {
    font-size: 1.2rem;
    font-family: "Press Start 2P", cursive;

    @media (max-width: 450px) {
      font-size: 1rem;
    }
  }
`;
