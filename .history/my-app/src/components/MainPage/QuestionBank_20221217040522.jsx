import React from 'react';


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
          {/* {props.data.map((questions) => (
            <div className="ques">
            <p>{props.Id}</p>
            <p>osjhi</p>
            <p>hhh</p>
            <p>iii</p>
            <p>ooo</p>
          </div>
          <hr /> */}
          ))}
          
        </div>
    </div>
    </div>
  )
}

export default QuestionBank;