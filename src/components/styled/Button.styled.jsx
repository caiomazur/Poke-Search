import styled from "styled-components";

export const StyledTypeButton = styled.button`
  padding: 1rem 2rem;
  border: 1px solid black;
  border-radius: 2rem;
  margin: 1rem;
  width: 8vw;

  text-align: center;
`;

export const TypeButtonContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;

  .button-types-position {
    width: 80vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
  }
`;
