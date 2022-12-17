import Questions from "../../../assests/updated.json";

export function getQuestions() {
  const pokemonList = pokemons;
  return pokemonList;
}

export function filterPokemon(pokeType) {
  let filtredPokemon = getPokemon().filter(type => type.tipo === pokeType);
  return filtredPokemon;
}
