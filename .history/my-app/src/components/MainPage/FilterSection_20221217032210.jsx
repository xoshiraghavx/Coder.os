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
  const Level = [
    {
      Name = 'All',
    },
    {
      Name = 'Easy',
    },
    {
      Name = 'Medium',
    },{

    }
  ]
  return (
    <div>
      <div className="filter-section">
        <div className="category">
          <div className="category-heading">
            <h3 className="title">Category</h3>
            <hr />
          </div>
          <div className="category-buttons">
          {Button.map((button) => (
            <button className="buttons">{button.Name}</button>
          ))}
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
