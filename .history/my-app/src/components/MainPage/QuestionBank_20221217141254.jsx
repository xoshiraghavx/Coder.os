import React from "react";
import "./QuestionBank.css";
import Questions from "../../assests/updated.json";

function QuestionBank() {
  const img =() =>{
    return(
      <img src="data:image/png;base64,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" alt="" srcset="" />
    )
  }
  return (
    <div>
      <div className="ques-section">
        <table id="customer">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Solution</th>
            <th>Level</th>
            <th>Category</th>
          </tr>
          <br />
          {Questions.map((question) => (
            <>
              <tr>
                <td>{question.Id}</td>
                <td>{question.Name}</td>
                <td>{img}</td>
                <td>{question.Level}</td>
                <td>{question.Category}</td>
              </tr>
            </>
          ))}
        </table>
      </div>
    </div>
  );
}

export default QuestionBank;

