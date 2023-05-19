import styled from "styled-components";

export const StyledButtonsContainer = styled.div`
  width: 55%;
  min-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  .button-types-position {
    width: 90%;
    min-width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const StyledGenButton = styled.button`
  font-family: "Press Start 2P", cursive;
  padding: 1rem 3rem;
  border: none;
  border-radius: 1rem;
  margin: 0.3rem 0.1rem;
  width: 12%;
  min-width: 60px;
  font-size: 1rem;
  text-align: center;
  text-transform: capitalize;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: rgba(251, 27, 27, 0.5);
    color: white;
  }
`;

export const StyledTypeButton = styled.button`
  font-family: "Press Start 2P", cursive;
  font-size: 0.9rem;
  padding: 1rem 1rem;
  border: none;
  border-radius: 1rem;
  margin: 0.3rem 0.1rem;
  width: 20%;
  min-width: 100px;
  text-align: center;
  text-transform: capitalize;
  transition: all 0.2s ease-in-out;
  background-color: rgba(223, 223, 223, 0.5);

  &:hover {
    background-color: rgba(0, 117, 190, 0.5);
    color: white;
  }
`;

export const StyledSearchButton = styled.div`
  border: none;

  .search-icon {
    width: 3rem;
    border: 1px solid black;
    border-radius: 25%;
    padding: 0.5rem;
    background: none;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
      background-color: rgba(255, 204, 0, 0.5);
      border: 1px solid transparent;
    }
  }
`;
