import React, { Component } from 'react';
import './WrongAnswerOption.css';

export default class WrongAnswerOption extends Component {
    render() {

        return(
          <div className="wrong-answer-container">
             <p>{this.props.w}</p>
          </div>
        );
      }
}
