import React, { useState } from 'react';
import QuestionItem from './components/QuestionItem.jsx';
import NewQuestion from './components/NewQuestion/NewQuestion.jsx';

function App() {
  const DUMMY_QUESTIONS = [
    { question: 'Whats Ag', correctAns: 'silver', wrong1: 'gold', wrong2: 'tin', wrong3: 'antimony' },
    { question: 'Whats Au', correctAns: 'gold', wrong1: 'silver', wrong2: 'tin', wrong3: 'antimony' },
    {
      question: 'What is the atomic number of lithium?',
      correctAns: 7,
      wrong1: Math.floor(Math.random() * 10) + 10,
      wrong2: Math.floor(Math.random() * 10) + 10,
      wrong3: Math.floor(Math.random() * 10) + 10,
    },
  ];

  const [questionsArray, setQuestionsArray] = useState(DUMMY_QUESTIONS);

  const addQuestionHandler = (questionPassed) => {
    console.log('in App.js');
    console.log(questionPassed);
    // This ADDS the new question to the
    // already-set questionsArray
    setQuestionsArray((prevQuestions) => {
      return [...prevQuestions, questionPassed];
    });
    console.log(questionsArray);
  };

  return (
    <>
      <h1>Learn Chemistry !</h1>
      <p>A React app from ChemistNate.</p>
      {questionsArray.map((x) => (
        <QuestionItem
          q={x.question}
          c={x.correctAns}
          w1={x.wrong1}
          w2={x.wrong2}
          w3={x.wrong3}
        ></QuestionItem>
      ))}

      <hr />
      <h3>ADD YOUR OWN QUESTION</h3>
      <NewQuestion onAddQuestion={addQuestionHandler} />
    </>
  );
}

export default App;
