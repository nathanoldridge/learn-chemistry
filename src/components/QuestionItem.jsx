import React, { Component } from 'react';
import './QuestionItem.css';
import './CorrectAnswerOption.jsx';
import CorrectAnswerOption from './CorrectAnswerOption.jsx';
import WrongAnswerOption from './WrongAnswerOption.jsx';

export default class QuestionItem extends Component {
    render() {

        return(
          <div className="question-container">
             <h2>{ this.props.q }</h2>
             <WrongAnswerOption w={this.props.w1}></WrongAnswerOption>
             <CorrectAnswerOption c={this.props.c}></CorrectAnswerOption>
             <WrongAnswerOption w={this.props.w2}></WrongAnswerOption>
             <WrongAnswerOption w={this.props.w3}></WrongAnswerOption>
          </div>
        );
      }
}
