import React from "react";
import "./QuestionBank.css";
import Questions from "../../assests/updated.json";

function QuestionBank() {
  // const Questions = [
  //   {
  //     Id: "1",
  //     Name: "oshi",
  //     Level: "begin",
  //     Solution: "",
  //     Category: "hard",
  //   },
  //   {
  //     Id: "1",
  //     Name: "oshi",
  //     Level: "begin",
  //     Solution: "",
  //     Category: "hard",
  //   },
  //   {
  //     Id: "1",
  //     Name: "oshi",
  //     Level: "begin",
  //     Solution: "",
  //     Category: "hard",
  //   },
  // ];
  return (
    <div>
      <div className="ques-section">
        <table>
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
                <td>{question.Solution}</td>
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

