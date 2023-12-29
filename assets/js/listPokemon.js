import fetchData from "./module/fetchData.js";
import {PokePreviewCard} from "./module/pokePreviewCard.js";

const API = "https://pokeapi.co/api/v2/pokemon";
let nextURL = API;
let previousURL = API;

const btnNext = document.querySelector("#next");
const btnPrevious = document.querySelector("#previous");

const pokeListElement = document.querySelector("#poke-list");

async function pokemoList(url) {
  try {
    const data = await fetchData(url);
    const pokeList = data.results;
    nextURL = data.next;
    previousURL = data.previous;

    pokeListElement.innerHTML = "";

    for (const pokemon of pokeList) {
      const pokemonData = await fetchData(pokemon.url);

      new PokePreviewCard("#poke-list", pokemonData.id, pokemonData.name);
    }
  } catch (error) {
    const msgError = document.createElement("p");
    msgError.innerText = `Erro ao obter a lista de Pokémon: ${error.message}`;
    console.error(error);
    pokeListElement.appendChild(msgError);
  }
}

async function loadNextPage() {
  if (nextURL) {
    await pokemoList(nextURL);
  }
}

async function loadPreviousPage() {
  if (previousURL) {
    await pokemoList(previousURL);
  }
}

btnNext.addEventListener("click", loadNextPage);

btnPrevious.addEventListener("click", loadPreviousPage);
pokemoList(API);
console.log(fetchData("https://pokeapi.co/api/v2/evolution-chain/1"));
