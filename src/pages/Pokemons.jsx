import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";
import Spinner from "../components/Spinner";
import { StyledPokemonList } from "../components/styled/PokemonCard.styled";
import {
  StyledButtonsContainer,
  StyledGenButton,
  StyledTypeButton,
} from "../components/styled/Button.styled";
import SearchBar from "../components/SearchBar";
import NavBar from "../components/NavBar";
import { StyledPokemons } from "../components/styled/Pokemons.styled";
import { StyledMainTitle } from "../components/styled/MainTitle.styled";

function Pokemons() {
  // initialize states
  const [pokemons, setPokemons] = useState([]);
  const [showPokemons, setShowPokemons] = useState([]); // Filtered array of pokemons (search)
  const [type, setType] = useState(null);
  const [gen, setGen] = useState(null);

  // function to get all the pokemons from the API
  const getPokemons = async () => {
    try {
      let firstPoke, lastPoke;
      let endpoints = [];

      // Determine the range of Pokémon based on the selected generation
      if (gen === 1) {
        firstPoke = 1;
        lastPoke = 151;
      } else if (gen === 2) {
        firstPoke = 152;
        lastPoke = 251;
      } else if (gen === 3) {
        firstPoke = 252;
        lastPoke = 386;
      } else if (gen === 4) {
        firstPoke = 387;
        lastPoke = 493;
      } else if (gen === 5) {
        firstPoke = 494;
        lastPoke = 649;
      } else if (gen === 6) {
        firstPoke = 650;
        lastPoke = 721;
      } else if (gen === 7) {
        firstPoke = 722;
        lastPoke = 809;
      } else if (gen === 8) {
        firstPoke = 810;
        lastPoke = 898;
      } else if (gen === 9) {
        firstPoke = 899;
        lastPoke = 1281;
      } else {
        firstPoke = 1;
        lastPoke = 151;
      }

      for (let i = firstPoke; i <= lastPoke; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
      }

      const responses = await axios.all(
        endpoints.map((endpoint) => axios.get(endpoint))
      );

      const pokemonData = responses.map((res) => res.data);
      console.log(pokemonData);
      setPokemons(pokemonData);
      setShowPokemons(pokemonData);
    } catch (error) {
      console.log(error);
    }
  };

  // use effect to call the function to get all the pokemons when the component mounts
  useEffect(() => {
    getPokemons();
  }, [gen]);

  // function to search for pokemons based on name and type
  const searchPokemons = (query) => {
    const filteredPokemons = pokemons.filter(
      (pokemon) =>
        pokemon.name.toLowerCase().includes(query.toLowerCase()) &&
        (type === null ||
          pokemon.types[0].type.name.toLowerCase() === type.toLowerCase())
    );
    setShowPokemons(filteredPokemons);
  };

  // function to filter pokemons by type
  const filterByType = (types) => {
    setType(types); // set the state of the type
    if (types === null) {
      setShowPokemons(pokemons); // show all the pokemons
    } else {
      const filteredPokemons = pokemons.filter((pokemon) => {
        const pokemonTypes = pokemon.types.map((type) =>
          type.type.name.toLowerCase()
        );
        return pokemonTypes.includes(types.toLowerCase()); // show the pokemons with the selected type in either primary or secondary type
      });
      setShowPokemons(filteredPokemons); // set the state of the filtered pokemons
    }
  };
  // function to filter pokemons by gen
  const filterByGen = (gen) => {
    setGen(gen); // set the state of the generation
    if (gen === null) {
      setShowPokemons(pokemons); // show all the pokemons
    } else {
      let firstPoke, lastPoke;
      if (gen === 1) {
        // Show 1st Gen Pokemons
        firstPoke = 0;
        lastPoke = 151;
      } else if (gen === 2) {
        firstPoke = 151;
        lastPoke = 251;
      } else if (gen === 3) {
        firstPoke = 251;
        lastPoke = 386;
      } else if (gen === 4) {
        firstPoke = 386;
        lastPoke = 493;
      } else if (gen === 5) {
        firstPoke = 493;
        lastPoke = 649;
      } else if (gen === 6) {
        firstPoke = 649;
        lastPoke = 721;
      } else if (gen === 7) {
        firstPoke = 721;
        lastPoke = 809;
      } else if (gen === 8) {
        firstPoke = 809;
        lastPoke = 898;
      } else if (gen === 9) {
        firstPoke = 898;
        lastPoke = pokemons.length; // Set the lastPoke to the total number of pokemons
      }

      const filteredPokemons = pokemons.slice(firstPoke, lastPoke);
      setShowPokemons(filteredPokemons); // set the state of the filtered pokemons
    }
  };
  // array of types to filter
  const types = [
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "rock",
    "bug",
    "ghost",
    "steel",
    "fire",
    "water",
    "grass",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "dark",
    "fairy",
  ];

  const gens = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <StyledPokemons>
      <NavBar />

      <div className="pokemons-page">
        <section className="search-interface">
          <StyledMainTitle>
            <div className="wrapper">
              <div className="container">
                <h1>Pokédex</h1>
              </div>
            </div>
            <hr />
          </StyledMainTitle>

          <SearchBar searchPokemons={searchPokemons} />
        </section>

        <section className="buttons-section">
          <div className="buttons-wrapper">
            <h2 className="buttons-title-gen">Generation</h2>

            <StyledButtonsContainer>
              <div className="button-gens-position">
                {/*           <StyledTypeButton onClick={() => filterByGen(null)}>
            All
          </StyledTypeButton> */}
                {gens.map((genItem) => (
                  <StyledGenButton
                    key={genItem}
                    onClick={() => filterByGen(genItem)}
                    active={genItem === gen}
                  >
                    {genItem}
                  </StyledGenButton>
                ))}
              </div>
            </StyledButtonsContainer>
          </div>

          <div className="buttons-wrapper">
            <h2 className="buttons-title-type">Type</h2>
            <StyledButtonsContainer>
              <div className="button-types-position">
                <StyledTypeButton onClick={() => filterByType(null)}>
                  All
                </StyledTypeButton>
                {types.map((typeItem) => (
                  <StyledTypeButton
                    key={typeItem}
                    onClick={() => filterByType(typeItem)}
                    active={typeItem === type}
                  >
                    {typeItem}
                  </StyledTypeButton>
                ))}
              </div>
            </StyledButtonsContainer>
          </div>
        </section>

        <StyledPokemonList>
          {showPokemons.length > 0 ? (
            showPokemons.map((pokemon, index) => (
              <Link
                className="link"
                key={index}
                to={`/${pokemon.name}`} // Pass the name as a route parameter
              >
                <PokemonCard
                  name={pokemon.name}
                  image={pokemon.sprites.front_default}
                  imageShiny={pokemon.sprites.front_shiny}
                  types={pokemon.types}
                />
              </Link>
            ))
          ) : (
            <Spinner />
          )}
        </StyledPokemonList>
      </div>
      <footer className="footer">
        <p>Developed by Caio Mazur</p>
      </footer>
    </StyledPokemons>
  );
}

export default Pokemons;
