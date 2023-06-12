import React, { Component } from 'react';
import { useState } from 'react';
import './QuestionItem.css';
import './CorrectAnswerOption.jsx';
import CorrectAnswerOption from './CorrectAnswerOption.jsx';
import WrongAnswerOption from './WrongAnswerOption.jsx';

const QuestionItem = (props) => {
    
   const [ qText, setqText] = useState(props.q);

        function clickHandler() {
            setqText("New Question Text");
            console.log('Button Clicked');
        }
    return(
          <div className="question-container">
             <h2>{ qText }</h2>
             <WrongAnswerOption w={props.w1}></WrongAnswerOption>
             <CorrectAnswerOption c={props.c}></CorrectAnswerOption>
             <WrongAnswerOption w={props.w2}></WrongAnswerOption>
             <WrongAnswerOption w={props.w3}></WrongAnswerOption>
             <button onClick={clickHandler}>Change Title</button>
          </div>
          
        );
    }

export default QuestionItem;