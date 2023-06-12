import React from "react";
import QuestionItem from "./components/QuestionItem.jsx";
import NewQuestion from "./components/NewQuestion/NewQuestion.jsx";

function App() {

  const questionText = "What is the atomic number of lithium?";
  const correctAnswer = 7;
  const wrongAnswers = [
      Math.floor(Math.random() * 10)+10,
      Math.floor(Math.random() * 10)+10,
      Math.floor(Math.random() * 10)+10
  ];

  return(
  <>
    <h1>Learn Chemistry !</h1>
    <p>A React app from ChemistNate.</p>
    <QuestionItem
      q={questionText}
      c={correctAnswer}
      w1={wrongAnswers[0]}
      w2={wrongAnswers[1]}
      w3={wrongAnswers[2]}
    ></QuestionItem>
    <hr />
    <h3>ADD YOUR OWN QUESTION</h3>
    <NewQuestion />
  </>
  );
};

export default App;