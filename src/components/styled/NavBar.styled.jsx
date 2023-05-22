import styled from "styled-components";

export const StyledNavBar = styled.nav`
  width: 100vw;
  background-color: #000000;
  border-bottom: 3px solid #0075be;
  height: 6vh;

  display: flex;
  align-items: center;

  ul {
    width: 30vw;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  a {
    font-family: "Press Start 2P", cursive;
    text-decoration: none;
    color: #ffffff;
    font-size: 1.2rem;
    margin: 1rem;
  }

  .logo {
    width: 3.5rem;
    margin-left: 4rem;
  }

  @media (max-width: 760px) {
    .logo {
      margin-left: 11rem;
    }
  }
`;
