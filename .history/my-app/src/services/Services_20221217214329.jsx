import Questions from "../../../assests/updated.json";

export function getQuestions() {
  const QuestionList = Questions;
  return QuestionList;
}

export function filterQuest(pokeType) {
  let filtredPokemon = getPokemon().filter(type => type.tipo === pokeType);
  return filtredPokemon;
}
