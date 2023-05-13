import styled from "styled-components";

export const StyledPokemons = styled.main`
  background-image: url("/src/assets/pattern_circles-7_1_2_0-0_0_1__ffffff_dedede.png");
  background-repeat: repeat-y;

  .main-title {
    color: #000000;
    text-align: center;
  }
  .main-title h1:hover {
    text-shadow: 20px 20px 0px #fb1b1b, 30px 30px 0px #ffcc00,
      40px 40px 0px rgb(0 117 190);
    transition: all ease-in-out 250ms;
  }
  .main-title h1 {
    font-size: 6rem;
    font-weight: bold;
    margin-bottom: 3rem;
  }

  .main-title h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .warning {
    margin-top: 2rem;
    font-size: 3rem;
  }
`;
