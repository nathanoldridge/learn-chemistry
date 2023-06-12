import React, { Component } from 'react';
import './QuestionItem.css';

export default class QuestionItem extends Component {
    render() {

        const questionText = "What is the atomic number of lithium?";
        const correctAnswer = 7;
        const wrongAnswers = [
            Math.floor(Math.random() * 10)+10,
            Math.floor(Math.random() * 10)+10,
            Math.floor(Math.random() * 10)+10
        ];

        return(
          <div className="question-container">
             <h2>{questionText}</h2>
             <p>a) { wrongAnswers[0] }</p>
             <p>b) { correctAnswer }</p>
             <p>c) { wrongAnswers[1] }</p>
             <p>d) { wrongAnswers[2] }</p>
          </div>
        );
      }
}
