import Questions from "../../../assests/updated.json";

export function getQuestions() {
  const QuestionList = Questions;
  return QuestionList;
}

export function filterQuestions(quesType) {
  let filtredQuestions = getQuestions().filter(type => type.c === pokeType);
  return filtredPokemon;
}
