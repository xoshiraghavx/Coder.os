import React, { useState, useEffect } from "react";
import "./FilterSection.css";
import { getQuestions, filterQuestions } from "../../../services/";
import Questions from "../../../assests/updated.json";


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
  // const FilteredOption= Questions.filter((filterOption)=>{
  //   if (filterOption.Name === Button.Name){
  //     return filterOption;
  //   }
  // })
  // if (Button.Name === 'All'){
  //   return {Questions};
  // }
  // else {FilteredOption}
  const Level = [
    {
      Name: 'All',
    },
    {
      Name: 'Easy',
    },
    {
      Name: 'Medium',
    },
    {
      Name: 'Hard',
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
            <button className="buttons" >{button.Name}</button>
            // <button className="buttons" onClick={FilteredOption}>{button.Name}</button>
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
          {
            Level.map((level)=>(
              <button className="buttons">{level.Name}</button>
            ))
          }
          
        </div>
      </div>
    </div>
  );
}

export default FilterSection;

