import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { StyledSinglePoke } from "../components/styled/SinglePoke.styled";
import Spinner from "../components/Spinner";
import PokemonCard from "../components/PokemonCard";
import { StyledMainTitle } from "../components/styled/MainTitle.styled";

function PokemonDetails() {
  const [pokemon, setPokemon] = useState(null); // State variable to store the details of a single Pokémon
  const { name } = useParams(); // Extracts the "name" parameter from the URL
  const [isHovered, setIsHovered] = useState(false); // State variable to track the hover state of an image
  const [evolutionChain, setEvolutionChain] = useState([]); // State variable to store the evolution chain of the Pokémon
  const [description, setDescription] = useState(""); // State variable to store the English description of the Pokémon
  const [isJumping, setIsJumping] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false); // State variable to track if the image is flipped
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  // Function to fetch the image of an evolution in the evolution chain
  const getEvolutionImage = async (evolution) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${evolution.species.name}`
      );
      const evolutionWithImage = {
        ...evolution,
        imageSrc: response.data.sprites.front_default,
      };
      return evolutionWithImage;
    } catch (error) {
      console.log(error);
      return evolution;
    }
  };

  // Function to fetch the details of a single Pokémon
  const getSinglePokemon = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      setPokemon(response.data); // Set the fetched Pokémon data
      setWeight(response.data.weight); // Set the weight state
      setHeight(response.data.height); // Set the height state

      const speciesResponse = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${response.data.id}`
      );
      const speciesData = speciesResponse.data;

      const evolutionChainURL = speciesData.evolution_chain.url;
      const evolutionChainResponse = await axios.get(evolutionChainURL);
      const evolutionChainData = evolutionChainResponse.data;

      const evolutionChain = [];
      const firstEvolution = {
        species: {
          name: evolutionChainData.chain.species.name,
          url: evolutionChainData.chain.species.url,
        },
      };
      evolutionChain.push(await getEvolutionImage(firstEvolution));

      const secondEvolution = evolutionChainData.chain.evolves_to[0];
      if (secondEvolution) {
        const secondEvolutionSpecies = {
          species: {
            name: secondEvolution.species.name,
            url: secondEvolution.species.url,
          },
        };
        evolutionChain.push(await getEvolutionImage(secondEvolutionSpecies));

        const thirdEvolution = secondEvolution.evolves_to[0];
        if (thirdEvolution) {
          const thirdEvolutionSpecies = {
            species: {
              name: thirdEvolution.species.name,
              url: thirdEvolution.species.url,
            },
          };
          evolutionChain.push(await getEvolutionImage(thirdEvolutionSpecies));
        }
      }

      setEvolutionChain(evolutionChain); // Set the fetched evolution chain
      setDescription(getEnglishDescription(speciesData)); // Set the English description
    } catch (error) {
      console.log(error);
    }
  };

  // Function to get the English description from the species data
  const getEnglishDescription = (speciesData) => {
    const englishEntry = speciesData.flavor_text_entries.find(
      (entry) => entry.language.name === "en"
    );
    return englishEntry ? englishEntry.flavor_text : "";
  };

  useEffect(() => {
    getSinglePokemon();
  }, [name]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsJumping(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsJumping(false);
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <main>
      <NavBar />

      <StyledSinglePoke>
        {pokemon ? (
          <section className="pokedex-page">
            <StyledMainTitle>
              <div className="wrapper">
                <div className="container">
                  <h1>Pokémon Details</h1>
                </div>
              </div>
              <hr />
            </StyledMainTitle>
            <section className="gameboy">
              <div className="pokedex-screen">
                <div className="main-pokemon">
                  <h4>
                    <span className="main-pokemon-title">{pokemon.name}</span>
                  </h4>
                  <img
                    className={`main-pokemon-img ${
                      isJumping ? "isJumping" : ""
                    }`}
                    src={
                      isFlipped && pokemon.sprites.back_default
                        ? pokemon.sprites.back_default
                        : isHovered
                        ? pokemon.sprites.front_shiny
                        : pokemon.sprites.front_default
                    }
                    alt={`${name}-image`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleClick}
                  />
                  <article className="description-info">
                    <p>{description}</p>
                    {/* Display the Pokémon description here */}
                  </article>
                </div>
              </div>
            </section>

            <section className="additional-info">
              <h2 className="add-info-title">Evolution Line</h2>

              {evolutionChain.length > 0 && (
                <div className="evolution-chain-container">
                  {evolutionChain.map((evolution) => (
                    <div
                      key={evolution.species.name}
                      className="evolution-pokemon"
                    >
                      <img
                        src={evolution.imageSrc}
                        alt={evolution.species.name}
                      />
                      <h3 className="evolution-name">
                        {evolution.species.name}
                      </h3>
                    </div>
                  ))}
                </div>
              )}
              <article className="main-poke-info">
                <h4 className="type-info">
                  Type:
                  {pokemon.types.map((type) => (
                    <span key={type.slot}> {type.type.name} </span>
                  ))}
                </h4>
                <h4>Weight: {weight / 10} kg</h4>
                <h4>Height: {height / 10} m</h4>
              </article>
            </section>
            <Link to="/pokemons">
              <img
                className="pikachu-back-icon"
                src={pokemon.sprites.back_default}
                alt={pokemon.name}
              />
              <p className="back-to">Back to Pokédex</p>
            </Link>
          </section>
        ) : (
          <Spinner />
        )}
        <footer className="footer">
          <p>Developed by Caio Mazur</p>
        </footer>
      </StyledSinglePoke>
    </main>
  );
}

export default PokemonDetails;
