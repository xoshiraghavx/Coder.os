import Questions from "../../../assests/updated.json";

export function getQuestions() {
  const QuestionList = Questions;
  return QuestionList;
}

export function filterQuestion(quesType) {
  let filtredQues = getPokemon().filter(type => type.tipo === pokeType);
  return filtredPokemon;
}
