import React from 'react';
import './QuestionBank.css'

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
          {/* <div className="ques">
          {props.data.map((questions) => (
            <p>{questions.Id}</p>
          ))}
          </div> */}
          <hr />
        </div>
    </div>
    </div>
  )
}

export default QuestionBank;