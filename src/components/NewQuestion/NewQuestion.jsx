import React from 'react';
import './NewQuestion.css';
import QuestionForm from './QuestionForm.jsx';

const NewQuestion = (props) => {

    const saveQuestionDataHandler = (enteredQuestionData) => {
        const questionData = {
            ...enteredQuestionData,
            id: Math.random().toString()
        };
        console.log(questionData);
        props.onAddQuestion(questionData);
    }

    return <div className="new-question">
        <QuestionForm onSaveQuestionData={saveQuestionDataHandler} />
    </div>
};

export default NewQuestion;