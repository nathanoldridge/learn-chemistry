import React, { Component } from 'react';
import './CorrectAnswerOption.css';

export default class CorrectAnswerOption extends Component {
    render() {

        return(
          <div className="correct-answer-container">
             <p>{this.props.c}</p>
          </div>
        );
      }
}
