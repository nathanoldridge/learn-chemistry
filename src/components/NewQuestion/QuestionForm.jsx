import React, {useState} from 'react';
import './QuestionForm.css';

const QuestionForm = () => {

/*
    const [userInput, setUserInput] = useState({
    enteredQuestion: '',
    enteredCorrect: '',
    enteredWrong1: '',
    enteredWrong2: '',
    enteredWrong3: '',
})
const questionChangeHandler = (event) => {setUserInput({...userInput, enteredQuestion: event.target.value})};
const correctChangeHandler = (event) => {setUserInput({...userInput, enteredCorrect: event.target.value})};
const wrong1ChangeHandler = (event) => {setUserInput({...userInput, enteredWrong1: event.target.value})};
const wrong2ChangeHandler = (event) => {setUserInput({...userInput, enteredWrong2: event.target.value})};
const wrong3ChangeHandler = (event) => {setUserInput({...userInput, enteredWrong3: event.target.value})};
*/

// The following 10 lines are functionally equivalent
// to the block comment above
const [enteredQuestion, setEnteredQuestion] = useState('');
const questionChangeHandler = (event) => { setEnteredQuestion(event.target.value); };
const [enteredCorrect, setEnteredCorrect] = useState('');
const correctChangeHandler = (event) => { setEnteredCorrect(event.target.value); };
const [enteredWrong1, setEnteredWrong1] = useState('');
const wrong1ChangeHandler = (event) => { setEnteredWrong1(event.target.value); };
const [enteredWrong2, setEnteredWrong2] = useState('');
const wrong2ChangeHandler = (event) => { setEnteredWrong2(event.target.value); };
const [enteredWrong3, setEnteredWrong3] = useState('');
const wrong3ChangeHandler = (event) => { setEnteredWrong3(event.target.value); };

const submitHandler = (event) => {
    event.preventDefault(); // prevents page reloading
    const questionData = {
        question: enteredQuestion,
        correctAns: enteredCorrect,
        wrong1: enteredWrong1,
        wrong2: enteredWrong2,
        wrong3: enteredWrong3,
    };
    console.log(questionData);

    // There is two-way binding between the form
    // input and these variables.
    // So we can clear the form here, on Submission
    setEnteredQuestion('');
    setEnteredCorrect('');
    setEnteredWrong1('');
    setEnteredWrong2('');
    setEnteredWrong3('');
};

return (<form onSubmit={submitHandler}>
    <div>
        <div>
            <label>Question</label>
            <input type="text" value={enteredQuestion} onChange={questionChangeHandler} />
        </div>
    </div>
    <div>
        <div>
            <label>Correct Answer</label>
            <input type="text" value={enteredCorrect} onChange={correctChangeHandler} />
        </div>
    </div>
    <div>
        <div>
            <label>Wrong Answer 1</label>
            <input type="text" value={enteredWrong1} onChange={wrong1ChangeHandler}/>
        </div>
    </div>
    <div>
        <div>
            <label>Wrong Answer 2</label>
            <input type="text" value={enteredWrong2} onChange={wrong2ChangeHandler}/>
        </div>
    </div>
    <div>
        <div>
            <label>Wrong Answer 3</label>
            <input type="text" value={enteredWrong3} onChange={wrong3ChangeHandler} />
        </div>
    </div>
    <div>
        <button type="submit">Add Question</button>
    </div>
</form>);

};

export default QuestionForm;