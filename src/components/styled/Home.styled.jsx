import styled from "styled-components";

export const StyledHome = styled.section`
  background-image: url("/images/pattern_circles-7_1_2_0-0_0_1__ffffff_dedede.png");
  background-repeat: repeat-y repeat-x;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .home-page {
    width: 90vw;
    background-color: rgba(223, 223, 223, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .main-content-home {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .home-info {
    width: 70vw;
    text-align: center;
    line-height: 1.5;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .home-info p {
    font-family: "Press Start 2P", cursive;
    font-size: 1.3rem;
    margin: 1rem;
    width: 40%;
    padding: 2rem;
  }

  .home-logo {
    margin-top: 5rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .poke-search-icon,
  .pokedex-icon {
    width: 10vw;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
  }

  .poke-search-icon:hover,
  .pokedex-icon:hover {
    transform: scale(1.2);
  }

  .pikachu-back-icon {
    width: 12vw;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
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

  .footer p {
    font-size: 1rem;
    font-family: "Press Start 2P", cursive;
  }

  hr {
    color: black;
  }
`;
