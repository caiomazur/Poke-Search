import React from "react";
import NavBar from "../components/NavBar";
import { StyledHome } from "../components/styled/Home.styled";
import { StyledMainTitle } from "../components/styled/MainTitle.styled";

function Home() {
  return (
    <StyledHome>
      <NavBar />

      <section className="home-page">

      <StyledMainTitle>
        <div className="wrapper">
          <div className="container">
            <h1>Pokémon</h1>
          </div>
        </div>
      </StyledMainTitle>

      </section>
    </StyledHome>
  );
}

export default Home;
