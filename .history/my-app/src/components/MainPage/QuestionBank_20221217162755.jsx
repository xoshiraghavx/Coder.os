import React from "react";
import "./QuestionBank.css";
import Questions from "../../assests/updated.json";
// import Img from "../../assests/file.png";



function QuestionBank() {

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
                <td className="name">{question.Name}</td>
                <td><img src="ass"></img></td>
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

