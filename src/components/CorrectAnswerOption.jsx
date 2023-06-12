import React, { Component } from 'react';
import './CorrectAnswerOption.css';

const CorrectAnswerOption = (props) => {
    return(
          <div className="correct-answer-container">
             <p>{props.c}</p>
          </div>
        );

}

export default CorrectAnswerOption;
