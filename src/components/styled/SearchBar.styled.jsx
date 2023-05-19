import styled from "styled-components";
export const StyledSearchBar = styled.div`
  margin: 3rem 0 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .search-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
  }


  #search-label {
   /*  margin: 0 2rem; */
  }

  #search-input {
    font-family: 'Press Start 2P', cursive;
    font-size: 2rem;
    width: 50%;
    height: 5vh;
    border: 1px solid black;
    border-radius: 2rem;
    margin: 0 2rem 0 7rem;
    padding-left: 1.3rem;
  }
`;
