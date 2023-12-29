export class PokePreviewCard {
  constructor(element, pokeId, pokeName) {
    this.pokeListElement = document.querySelector(element);
    this.pokeCard = document.createElement("div");
    this.pokeCard.classList.add("card-poke");
    this.createCard(pokeId, pokeName);
  }
  createCard(pokeId, pokeName) {
    this.pokeCard.innerHTML = `
        <div class="poke-id"><h4>#0${pokeId}</h4></div>
        <div class="poke-info-container">
          <div class="poke-info">
            <h3>${pokeName}</h3>
            <a href="#" class="poke-link" data-name="${pokeName}" data-id="${pokeId}" data-image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png">Sobre</a>
          </div>
          <div class="poke-img">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png" alt="Imagem do ${pokeName}" />
          </div>
        </div>`;
    this.pokeListElement.appendChild(this.pokeCard);
    this.pokeLink = this.pokeCard.querySelector(".poke-link");
    this.pokeLink.onclick = (event) => {
      event.preventDefault();
      this.pokemonName = event.target.dataset.name;
      this.pokemonId = event.target.dataset.id;
      this.pokemonImage = event.target.dataset.image;
      window.location.href = `view.html?pokemon=${this.pokemonName}&id=${this.pokemonId}&image=${this.pokemonImage}`;
    };
  }
  init() {
    this.createCard();
    return this;
  }
}
