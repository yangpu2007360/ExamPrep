import React, { useState } from 'react'

function Question({ currQuestion }) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [submittedAnswer, setSubmittedAnswer] = useState(null);
    const correctAnswer = currQuestion.answer
    const handleChoiceChange = (id) => {
        console.log(id)
        if (id === 'A') {
            document.getElementById("A").checked = true;
            document.getElementById("B").checked = false;
            document.getElementById("C").checked = false;
            document.getElementById("D").checked = false;
            setSelectedAnswer('A')
        }
        if (id === 'B') {
            document.getElementById("A").checked = false;
            document.getElementById("B").checked = true;
            document.getElementById("C").checked = false;
            document.getElementById("D").checked = false;
            setSelectedAnswer('B')
        }
        if (id === 'C') {
            document.getElementById("A").checked = false;
            document.getElementById("B").checked = false;
            document.getElementById("C").checked = true;
            document.getElementById("D").checked = false;
            setSelectedAnswer('C')
        }
        if (id === 'D') {
            document.getElementById("A").checked = false;
            document.getElementById("B").checked = false;
            document.getElementById("C").checked = false;
            document.getElementById("D").checked = true;
            setSelectedAnswer('D')
        }
    }
    const handleSubmit = () => {
        if (selectedAnswer === 'A') {
            setSubmittedAnswer('A')
            document.getElementById("B").disabled = true;
            document.getElementById("C").disabled = true;
            document.getElementById("D").disabled = true;
        }
        if (selectedAnswer === 'B') {
            setSubmittedAnswer('B')
            document.getElementById("A").disabled = true;
            document.getElementById("C").disabled = true;
            document.getElementById("D").disabled = true;
        }
        if (selectedAnswer === 'C') {
            setSubmittedAnswer('C')
            document.getElementById("A").disabled = true;
            document.getElementById("B").disabled = true;
            document.getElementById("D").disabled = true;
        }
        if (selectedAnswer === 'D') {
            setSubmittedAnswer('D')
            document.getElementById("A").disabled = true;
            document.getElementById("B").disabled = true;
            document.getElementById("C").disabled = true;
        }
        document.getElementById("submit").style.display = 'none'
    }

    return (
        <div className='question-card'>
            <div>Question{currQuestion.number}</div>
            <div className='question-description'>
                <div>{currQuestion.description}</div>
                <div className='choices'>
                    {currQuestion.choices.map((choice) =>
                        <div className='single-choice' key={choice}>
                            <input type="radio" id={choice[0]} onChange={() => { handleChoiceChange(choice[0]) }} />
                            <label className='choice-label' htmlFor="choice1">{choice}</label>
                        </div>)}
                </div>
                <div className='submit' onClick={handleSubmit} id='submit'>Submit</div>
                {submittedAnswer != null && submittedAnswer === correctAnswer &&
                    <h3 className='result'>
                        Your Answer is Correct!
                    </h3>
                }
                {submittedAnswer != null && submittedAnswer !== correctAnswer &&
                    <h3 className='result'>
                        Your Answer is Wrong!
                    </h3>
                }
            </div>
        </div>
    )
}
export default Question