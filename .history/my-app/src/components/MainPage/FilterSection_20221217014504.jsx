import React from "react";
import "./FilterSection.css";

function FilterSection() {
  const Button = [
    {
      Name: "All",
    },
    {
      Name: "Arrays",
    },
    {
      Name: "Dynamic Programming",
    },
    {
      Name: "Graph",
    },
    {
      Name: "Interval",
    },
    {
      Name: "String",
    },
    {
      Name: "Tree",
    },
    {
      Name: "Linked list",
    },
    {
      Name: "Matrix",
    },
    {
      Name: "Heap",
    },
  ];
  return (
    <div>
      <div className="filter-section">
        <div className="category">
          <div className="category-heading">
            <h3 className="title">Category</h3>
            <hr />
          </div>
          <div className="category-buttons">
          return reptiles.map((reptile) => <li>{reptile}</li>);
            <button className="buttons">{Button.Name}</button>
            {/* <button className="buttons">Binary</button>
            <button className="buttons">Arrays</button> <br />
            <button className="buttons">Dynamic Programming</button>
            <button className="buttons">Graph</button> <br />
            <button className="buttons">Interval</button>
            <button className="buttons">String</button>
            <button className="buttons">Tree</button> <br />
            <button className="buttons">Linked List</button>
            <button className="buttons">Matrix</button>
            <button className="buttons">Heap</button> */}
          </div>
        </div>

        <div className="level">
          <div className="level-heading">
            <h3 className="title">Level</h3>
            <hr />
          </div>
        </div>
        <div className="level-buttons">
          <button className="buttons">All</button>
          <button className="buttons">Easy</button>
          <button className="buttons">Medium</button>
          <button className="buttons">Hard</button>
        </div>
      </div>
    </div>
  );
}

export default FilterSection;
