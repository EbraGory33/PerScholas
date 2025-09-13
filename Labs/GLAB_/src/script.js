// 1. Change the `#trainer-name` to: `Trainer: Ash Ketchum`
const trainer_name = (document.getElementById("trainer-name").textContent =
  "Trainer: Ash Ketchum");
console.log(trainer_name);

// 2. Update the `.bio` paragraph to say:
//    > Ash is ready to catch 'em all with his new Pokémon team.
const newBio = (document.querySelector(".bio").textContent =
  "Ash is ready to catch 'em all with his new Pokémon team.");
console.log(newBio);

// 3. Create a new `<li>` with the text `Pikachu` and append it to the `#pokemon-list`.

const newLi = document.createElement("li");
newLi.textContent = "Pikachu";
const pokemon_list = document.getElementById("pokemon-list").appendChild(newLi);

// 4. Add a new `<p>` inside `#new-pokemon-container` that says:
// > A wild adventure awaits!

const newP = document.createElement("p");
newP.textContent = "A wild adventure awaits!";
document.getElementById("new-pokemon-container").appendChild(newP);

// 5. Inside the `#badges` div:
//     - Add a `<h2>` that says: `Badges Collected`
//     - Add a `<ul>` with three badges:
//         - Boulder Badge
//         - Cascade Badge
//         - Thunder Badge
const badges = document.getElementById("badges");
const newH2 = document.createElement("h2");
const newUL = document.createElement("ul");
badges.appendChild(newH2);
badges.appendChild(newUL);
newH2.textContent = "Badges Collected";
newUL.innerHTML = `
  <li>Boulder Badge</li>
  <li>Cascade Badge</li>
  <li>Thunder Badge</li>
`;

// 6. Add the class `"pokemon"` to each `<li>` inside `#pokemon-list`.
const pokemonItems = document.querySelectorAll("#pokemon-list li");
console.log(pokemonItems);
pokemonItems.forEach((li) => {
  li.classList.add("pokemon");
});

// 7. Replace the list item `"Bulbasaur"` with a new `<li>` containing `"Squirtle"`.
const list = document.getElementById("pokemon-list");
items = list.getElementsByTagName("li");
items[1].textContent = "Squirtle";

// 8. Create a new `div` for a Pokémon team and populate it with 3 Pokémon cards.
//    Each card should be structured like this:
//    `<div class="pokemon-card">   <h3>Pikachu</h3>   <p>Type: Electric</p> </div>`
//    Pokémon to include:

//    - Pikachu (Electric)
//    - Charmander (Fire)
//    - Squirtle (Water)

const newDiv = document.createElement("div");
newDiv.innerHTML = `
<div class="pokemon-card">   <h3>Pikachu</h3>   <p>Type: Electric</p> </div>
<div class="pokemon-card">   <h3>Charmander</h3>   <p>Type: Fire</p> </div>
<div class="pokemon-card">   <h3>Squirtle</h3>   <p>Type: Water</p> </div>
`;
document.body.appendChild(newDiv);

// 9. Inside `#journal`:

//    - Add a `<h2>` with: `Trainer's Journal`
//    - Add a paragraph with today's date (`new Date().toDateString()`)
//    - Add another paragraph with this text:
//      > Ash saw a wild Snorlax blocking the road.

const Journal = document.getElementById("journal");
console.log(Journal);
const heading = document.createElement("h2");
const time = document.createElement("p");
const text = document.createElement("p");
Journal.appendChild(heading);
Journal.appendChild(time);
Journal.appendChild(text);
heading.textContent = "Trainer's Journal";
time.textContent = new Date().toDateString();
text.textContent = "Ash saw a wild Snorlax blocking the road.";

// 10. Select the `"Charmander"` list item and remove it from the list.
const Charmander = document.querySelectorAll("#pokemon-list li")[0];
console.log(Charmander);
Charmander.remove();

// 11. Create a new `div` with the id `pokedex`.
//     Use the following array to dynamically generate 3 Pokédex entries:
//     `const pokedex = [   { name: "Bulbasaur", type: "Grass/Poison", number: "#001" },   { name: "Charmander", type: "Fire", number: "#004" },   { name: "Squirtle", type: "Water", number: "#007" } ];`
//     Each entry should follow this structure:
//     `<div class="entry">   <h4>Name: Bulbasaur</h4>   <p>Type: Grass/Poison</p>   <p>Number: #001</p> </div>`

const pokedexDiv = document.createElement("div");
pokedexDiv.id = "pokedex";
console.log(pokedexDiv);

const pokedex = [
  { name: "Bulbasaur", type: "Grass/Poison", number: "#001" },
  { name: "Charmander", type: "Fire", number: "#004" },
  { name: "Squirtle", type: "Water", number: "#007" },
];
pokedexDiv.innerHTML = "<h2>Entry</h2>";
pokedex.forEach((i) => {
  pokedexDiv.innerHTML += `<div class="entry">   <h4>Name: ${i.name}</h4>   <p>Type: ${i.type}</p>   <p>Number: ${i.number}</p> </div>`;
});

document.body.appendChild(pokedexDiv);
