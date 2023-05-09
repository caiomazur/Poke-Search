import styled from "styled-components";

export const StyledNavBar = styled.nav`
  width: 100vw;
  margin-bottom: 2rem;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
  }

  .logo {
    width: 3rem;
  }
`;
