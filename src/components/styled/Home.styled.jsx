import styled from "styled-components";

export const StyledHome = styled.section`
  background-image: url("/images/7pattern_circles-7_1_2_0-0_0_1__ffffff_dedede.png");
  background-repeat: repeat-y;
  background-repeat: repeat-x;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .home-page {
    width: 90vw;
    height: 100vh;
    background-color: rgba(223, 223, 223, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .main-title h1:hover {
    text-shadow: 20px 20px 0px #fb1b1b, 30px 30px 0px #ffcc00,
      40px 40px 0px rgb(0 117 190);
    transition: all ease-in-out 250ms;
  }
  .main-title h1 {
    font-size: 6rem;
    font-weight: bold;
    margin-bottom: 4rem;
  }

  .main-title h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;
