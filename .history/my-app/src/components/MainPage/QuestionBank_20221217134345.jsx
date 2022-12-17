import React from "react";
import "./QuestionBank.css";
// import Questions from '../../assests/updated.json';

function QuestionBank(props) {
  const Questions = [
    {
      Id: "1",
      Name: "oshi",
      Level: "begin",
      Category: "hard",
    },
    {
      Id: "1",
      Name: "oshi",
      Level: "begin",
      Category: "hard",
    },
    {
      Id: "1",
      Name: "oshi",
      Level: "begin",
      Category: "hard",
    },
  ];
  return (
    <div>
      <div className="ques-section">
      <table>
  <tr>
    <th>Name</th>
    <th>Sol</th>
    <th>Country</th>
    <th>Country</th>
    <th>Country</th>
    <th>Country</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>
      </div>
    </div>
  );
}

export default QuestionBank;
{
  /* <div className="ques-bar">
  <p>#</p>
  <p>Name</p>
  <p>Level</p>
  <p>Category</p>
  <p>Solution</p>
</div>
<div className="ques-bank"> 
<div className="ques">
 {Questions.map((question) => (
  <>
  <div>

  </div>
  </>
  // <>
  // <p>{question.Id}</p>
  // <p>{question.Name}</p>
  // <p>{question.Level}</p>
  // <p>{question.Category}</p>
  // <p>{question.videourl}</p>
  // </>
))}
</div>
<hr />
</div> */
}
