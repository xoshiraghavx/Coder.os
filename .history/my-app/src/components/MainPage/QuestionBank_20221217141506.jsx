import React from "react";
import "./QuestionBank.css";
import Questions from "../../assests/updated.json";


function QuestionBank() {
  const img =() =>{
    return(
      @import url('https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css')
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

