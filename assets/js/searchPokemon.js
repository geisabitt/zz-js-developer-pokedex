import fetchData from "./module/fetchData.js";
import {PokePreviewCard} from "./module/pokePreviewCard.js";

const API = "https://pokeapi.co/api/v2/pokemon";
const searchInput = document.querySelector("#search");
const btnSearch = document.querySelector("#searchBtn");
const pokeListElement = document.querySelector("#poke-list");

async function searchPokemon(searchTerm) {
  const formattedSearchTerm = searchTerm.toLowerCase().trim();

  if (formattedSearchTerm.length >= 3) {
    const searchURL = `${API}?limit=1118`;
    try {
      const allPokemonData = await fetchData(searchURL);

      const filteredPokemon = allPokemonData.results.filter((pokemon) => {
        const pokemonName = pokemon.name.toLowerCase();
        const userSearchTerm = formattedSearchTerm.substring(0, 3);
        return pokemonName.startsWith(userSearchTerm);
      });

      pokeListElement.innerHTML = "";

      filteredPokemon.forEach(async (pokemon) => {
        const pokemonData = await fetchData(pokemon.url);

        new PokePreviewCard("#poke-list", pokemonData.id, pokemonData.name);
      });
    } catch (error) {
      const msgError = document.createElement("p");
      msgError.innerText = `Erro: ${error.message}`;
      console.error(error);
      pokeListElement.appendChild(msgError);
    }
  }
}

btnSearch.addEventListener("click", (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value;
  searchPokemon(searchTerm);
});
