import React from "react";
import "./FilterSection.css";
import Questions from "../../assests/updated.json";


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
  const FilteredOption= Button.filter((filterOption)=>{
    if (filterOption.Name == {Questions.Name}){
      return filterOption;
    }
  })
  if 
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
// const filterBtns = btnContainer.querySelectorAll(".filter-btn");
//   // console.log(filterBtns);

//   filterBtns.forEach(function (btn) {
//     btn.addEventListener("click", function (e) {
//       // console.log(e.currentTarget.dataset);
//       const category = e.currentTarget.dataset.id;
//       const menuCategory = menu.filter(function (menuItem) {
//         // console.log(menuItem.category);
//         if (menuItem.category === category) {
//           return menuItem;
//         }
//       });
//       if (category === "all") {
//         diplayMenuItems(menu);
//       } else {
//         diplayMenuItems(menuCategory);
//       }
//     });
//   });
