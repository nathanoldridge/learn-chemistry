import React, { Component } from 'react';
import './WrongAnswerOption.css';

const WrongAnswerOption = (props) => {
        return(
          <div className="wrong-answer-container">
             <p>{props.w}</p>
          </div>
        );
}

export default WrongAnswerOption;
