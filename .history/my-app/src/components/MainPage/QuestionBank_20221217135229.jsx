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
            <th>Id</th>
            <th>Name</th>
            <th>Solution</th>
            <th>Level</th>
            <th>Category</th>
          </tr>
          </table>
          <tr>
            <td>1</td>
            <td>
              Oshi Raghavgxdyucguygbergf ierwfiruhgirugyi4tyg8o rrforufoiu
            </td>
            <td>
              <img></img>
            </td>
            <td>Hard</td>
            <td>Germany</td>
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
