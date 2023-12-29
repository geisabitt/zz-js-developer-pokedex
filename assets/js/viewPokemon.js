import fetchData from "./module/fetchData.js";

const params = new URLSearchParams(window.location.search);
const namePokemon = params.get("pokemon");

const API = "https://pokeapi.co/api/v2/pokemon";
const firstCharUpperCase = namePokemon.charAt(0).toUpperCase() + namePokemon.slice(1);

document.title = `${firstCharUpperCase}`;
const navTitle = document.querySelector(".poke-title");
navTitle.innerText = `${firstCharUpperCase}`;

const imgContainer = document.querySelector(".img-container");
const imgSrc = document.querySelector(".img-container img");
const pokeWeight = document.getElementById("weight");
const pokeHeight = document.getElementById("height");
const pokeTypes = document.querySelector(".types-container");
const pokeVersionGame = document.querySelector("#version-game");

async function pokemoDetails() {
  try {
    const data = await fetchData(`${API}/${namePokemon}`);

    const speciesURL = data.species.url;
    const speciesResponse = await fetch(speciesURL);
    const speciesData = await speciesResponse.json();
    const evolutionChainURL = speciesData.evolution_chain.url;

    const evolutionChainResponse = await fetch(evolutionChainURL);
    const evolutionChainData = await evolutionChainResponse.json();

    // implementar evolução
    console.log("Cadeia de evolução:");
    console.log(evolutionChainData.chain.species.name);
    console.log(evolutionChainData.chain.evolves_to[0].species.name);

    const getPokeDetails = data;
    const getPokeImg = getPokeDetails.sprites.front_default;
    const getPokeTypes = getPokeDetails.types;
    const getPokeClass = getPokeTypes[0].type.name;
    const getFindGames = getPokeDetails.game_indices;

    imgContainer.classList.add(getPokeClass);
    imgSrc.setAttribute("src", getPokeImg);
    imgSrc.setAttribute("alt", namePokemon);
    pokeHeight.innerText = `${getPokeDetails.height} m`;
    pokeWeight.innerText = `${getPokeDetails.weight} Kg`;

    getFindGames.forEach((game) => {
      const spanPoke = document.createElement("span");
      spanPoke.innerText = `${game.version.name}, `;
      pokeVersionGame.appendChild(spanPoke);
    });

    getPokeTypes.forEach((item) => {
      const spanType = document.createElement("span");
      spanType.classList.add(item.type.name, "tag");
      spanType.innerText = item.type.name;
      pokeTypes.appendChild(spanType);

      console.log(item.type);
    });
  } catch (error) {
    const msgError = document.createElement("div");
    msgError.classList.add("modal-error");
    msgError.innerText = `Erro ao obter a lista de Pokémon: ${error.message}`;
    console.error(error);
    pokeListElement.appendChild(msgError);
  }
}

pokemoDetails();
