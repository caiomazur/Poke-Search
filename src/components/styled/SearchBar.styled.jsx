import styled from "styled-components";
export const StyledSearchBar = styled.div`
  margin: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;

  .search-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50vw;
  }

  #search-label {
    font-size: 2rem;
    width: 6vw;
  }

  #search-input {
    font-size: 2rem;
    width: 40vw;
    height: 4vh;
    border-radius: 2rem;
  }
`;
