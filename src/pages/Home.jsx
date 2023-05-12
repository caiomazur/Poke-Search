import React from "react";
import NavBar from "../components/NavBar";
import { StyledHome } from "../components/styled/Home.styled";

function Home() {
  return (
    <StyledHome>
      <NavBar />

      <div className="main-title">
        <h1>Pokédex</h1>
        <h3>
          Here you can search and get to know more about your favorite pokémons!
        </h3>
      </div>
    </StyledHome>
  );
}

export default Home;
