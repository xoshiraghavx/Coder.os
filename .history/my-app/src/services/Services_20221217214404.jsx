import Questions from "../../../assests/updated.json";

export function getQuestions() {
  const QuestionList = Questions;
  return QuestionList;
}

export function filterQuestions(quesType) {
  let filtredQuestion = get().filter(type => type.tipo === pokeType);
  return filtredPokemon;
}
