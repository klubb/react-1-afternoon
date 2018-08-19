import React, { Component } from "react";
export default class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: ["jake", "kaleb", "jeremy"],
      userInput: "",
      filteredArray: []
    };
  }

  handleClick = userInput => {
    let filterNames = [];
    let filteredArr = this.state.unFilteredArray.filter((e, i) => {
      if (e[i] === userInput) {
        filterNames.push(e[i]);
      }
    });
  };
  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">People {this.state.unFilteredArray}</span>
        <input className="inputLine" type="text" />
        <button
          onClick={() => this.handleClick(this.state.userInput)}
          className="confirmationButton"
        >
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          Result: {this.state.filteredArray}{" "}
        </span>
      </div>
    );
  }
}
