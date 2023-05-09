import React from "react";
import { StyledSpinner } from "./styled/Spinner.styled";

function Spinner() {
  return (
    <StyledSpinner>
      <div className="spinner-container">
        <div className="pokemon"></div>
      </div>
    </StyledSpinner>
  );
}

export default Spinner;
