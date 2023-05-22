import React from "react";
import NavBar from "../components/NavBar";
import { StyledHome } from "../components/styled/Home.styled";
import { StyledMainTitle } from "../components/styled/MainTitle.styled";
import { Link } from "react-router-dom";

function Home() {
  return (
    <StyledHome>
      <NavBar />

      <section className="home-page">
        <StyledMainTitle>
          <div className="wrapper">
            <div className="container">
              <h1>Poké Search</h1>
            </div>
          </div>
          <hr />
        </StyledMainTitle>

        <main className="main-content-home">
          <div className="home-logo">
            <Link to="/pokemons">
              {" "}
              <img
                src="/images/pokemonIcon3.png"
                alt="Poké-Search-Icon"
                className="poke-search-icon"
              />
            </Link>
            <Link to="/pokemons">
              {" "}
              <img
                src="/images/pokemonIcon2.png"
                alt="Poké-Search-Icon"
                className="poke-search-icon"
              />
            </Link>
          </div>
          <article class="home-info">
            <p>
              Welcome to the Poké Search app! Catch 'em all without breaking a
              sweat.
            </p>
            <p>
              To get started, head over to the "Pokédex" page in the navigation
              bar above or click on any icon.
            </p>
          </article>
          <Link to="/pokemons">
            <div className="pikachu-container">
              <img
                src="/images/pokemonIcon5.png"
                alt="Pokedéx-Icon"
                className="pikachu-back-icon"
              />
            </div>
          </Link>
        </main>
      </section>

      <footer className="footer">
        <p>Developed by Caio Mazur</p>
      </footer>
    </StyledHome>
  );
}

export default Home;
