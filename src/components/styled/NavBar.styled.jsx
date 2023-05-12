import styled from "styled-components";

export const StyledNavBar = styled.nav`
  width: 100vw;
  margin-bottom: 1rem;
  background-color: #000000;


  ul {
    height: 8vh;
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
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
