import styled from "styled-components";

export const StyledPokemons = styled.main`
  background-image: url("/images/pattern_circles-7_1_2_0-0_0_1__ffffff_dedede.png");
  background-repeat: repeat-y repeat-x;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .pokemons-page {
    width: 90vw;
    background-color: rgba(223, 223, 223, 0.5);
  }

  .buttons-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search-interface {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .buttons-title-gen {
    font-family: "Press Start 2P", cursive;
    width: 7%;
    margin-left: 1rem;
    text-align: center;
    font-size: 1.2rem;
  }

  .buttons-title-type {
    font-family: "Press Start 2P", cursive;
    width: 7%;
    margin-left: 1rem;
    text-align: center;
    font-size: 1.2rem;
  }

  .warning {
    margin-top: 2rem;
    font-size: 3rem;
  }

  .buttons-section {
    background-image: url("/images/text-box-pokmon.png");
    background-size: 75% 130%;
    background-repeat: no-repeat;
    background-position: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2rem;
    padding: 5rem 1rem 5rem 0;
  }

  .footer p {
    font-size: 1rem;
    font-family: "Press Start 2P", cursive;
  }

  @media (max-width: 1333px) {
    .buttons-title-gen {
      display: none;
    }

    .buttons-title-type {
      display: none;
    }
  }

  @media (max-width: 760px) {
    .pokemons-page {
      width: 100vw;
    }

    .buttons-wrapper {
      width: 100%;
    }

    .buttons-title-gen {
      display: none;
    }

    .buttons-title-type {
      display: none;
    }

    .buttons-section {
      background-size: 80% 125%;
      padding: 5rem 1rem 5rem 0;
    }
    @media (max-width: 660px) {
      .buttons-section {
        background: none;
        background-color: rgba(10, 40, 95, 0.2);
        padding: 2rem;
        width: 70%;
        min-width: 325px;
        border-radius: 2rem;
      }
    }
    @media (max-width: 400px) {
      .buttons-section {
        padding: 2rem;
        width: 80%;
        min-width: 0;
      }
    }
  }
`;
