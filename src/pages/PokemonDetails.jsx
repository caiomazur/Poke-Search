import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { StyledSinglePoke } from "../components/styled/SinglePoke.styled";
import Spinner from "../components/Spinner";
import PokemonCard from "../components/PokemonCard";

function PokemonDetails() {
  const [pokemon, setPokemon] = useState(null);
  const { name } = useParams();
  const [isHovered, setIsHovered] = useState(false);
  const [evolutionChain, setEvolutionChain] = useState([]);
  const [description, setDescription] = useState("");

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

  const getSinglePokemon = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      setPokemon(response.data);

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

      setEvolutionChain(evolutionChain);
      setDescription(getEnglishDescription(speciesData));
    } catch (error) {
      console.log(error);
    }
  };

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
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <main>
      <NavBar />

      <StyledSinglePoke>
        {pokemon ? (
          <div className="pokemon-container">
            <h1 className="single-poke-title">{pokemon.name}</h1>
            <img
              className="single-poke-img"
              src={
                isHovered
                  ? pokemon.sprites.front_shiny
                  : pokemon.sprites.front_default
              }
              alt={`${name}-image`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <article className="poke-info">
              <h4>
                Type:
                {pokemon.types.map((type) => (
                  <span key={type.slot}> {type.type.name} </span>
                ))}
              </h4>
              <p>{description}</p> {/* Display the Pokémon description here */}
            </article>

            {evolutionChain.length > 0 && (
              <div className="evolution-chain">
                <h2>Evolution Chain</h2>
                {evolutionChain.map((evolution) => (
                  <div
                    key={evolution.species.name}
                    className="evolution-container"
                  >
                    <img
                      src={evolution.imageSrc}
                      alt={evolution.species.name}
                    />
                    <h3>{evolution.species.name}</h3>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <Spinner />
        )}
      </StyledSinglePoke>
    </main>
  );
}

export default PokemonDetails;
