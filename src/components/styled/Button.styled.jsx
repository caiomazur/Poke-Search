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

  .button-gens-position {
    width: 90%;
    min-width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
  }

  @media (max-width: 760px) {
    margin: 0;
    padding: 1rem;

    .button-types-position {
      min-width: 300px;
    }

    .button-gens-position {
      min-width: 200px;
      flex-wrap: wrap;
    }

    @media (max-width: 560px) {
      min-width: 350px;

      .button-gens-position {
        width: 100%;
      }

      .button-types-position {
        width: 100%;
      }
    }
  }
`;

export const StyledGenButton = styled.button`
  font-family: "Press Start 2P", cursive;
  padding: 1rem 2.5rem;
  border-radius: 1rem;
  margin: 0.3rem 0.1rem;
  width: 10%;
  min-width: 30px;
  font-size: 1rem;
  text-align: center;
  text-transform: capitalize;
  transition: all 0.2s ease-in-out;
  border: none;
  background-color: rgba(251, 27, 27, 0.1);

  &:hover {
    background-color: rgba(251, 27, 27, 0.5);
    color: white;
  }

  @media (max-width: 760px) {
    width: 18%;
    padding: 1rem 5rem;
  }

  @media (max-width: 660px) {
    background-color: white;
  }

  @media (max-width: 560px) {
    width: 20%;
    padding: 1rem;
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
  background-color: rgba(0, 117, 190, 0.1);
  border: none;

  &:hover {
    background-color: rgba(0, 117, 190, 0.5);
    color: white;
  }

  @media (max-width: 760px) {
    width: 10%;
    padding: 1rem;
    min-width: 100px;
  }

  @media (max-width: 660px) {
    background-color: white;
  }

  @media (max-width: 560px) {
    min-width: 85px;
    padding: 1rem;
  }

  @media (max-width: 400px) {
    min-width: 60px;
    padding: 1rem;
    font-size: 0.9rem;
width: 30%;
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
