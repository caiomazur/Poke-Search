import styled from "styled-components";

export const StyledNavBar = styled.nav`
  width: 100vw;
  background-color: #000000;
  border-bottom: 3px solid #0075BE;

  ul {
    height: 5vh;
    width: 30vw;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0;
    padding: 0;
    
  }

  a {
    text-decoration: none;
    color: #FFFFFF;
    font-size: 1.5rem;
  }

  .logo {
    width: 3rem;
  }
`;
