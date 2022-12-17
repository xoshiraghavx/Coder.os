import React from 'react';
import './QuestionBank.css';
import Questions from '../../assests/updated.json';

function QuestionBank(props) {
  return (
    <div>
        <div className="ques-section">
          <div className="ques-bar">
            <p>#</p>
            <p>Name</p>
            <p>Level</p>
            <p>Category</p>
            <p>Solution</p>
          </div>
          <div className="ques-bank"> 
          <div className="ques">
           {Questions.map((question) => (
            <p>{question.Id}</p>
            <p>{question.Name}</p>
            <p>{question.Level}</p>
            <p>{question.Category}</p>
            <p>{}</p>
          ))}
          </div>
          <hr />
        </div>
    </div>
    </div>
  )
}

export default QuestionBank;