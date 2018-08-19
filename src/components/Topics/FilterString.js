import React, { Component } from "react";
export default class FilterString extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ["jake", "kaleb", "jeremy", "cat", "dog", "jagger"],
      userInput: "",
      filteredArray: []
    };
  }
  handleChange(val) {
    this.setState({
      userInput: val
    });
  }
  filterNames(userInput) {
    let names = this.state.names;
    let filteredNames = [];
    for (let i = 0; i < names.length; i++) {
      if (names[i].includes(userInput)) {
        filteredNames.push(names[i]);
      }
    }
    this.setState({ filteredNames: filteredNames });
  }
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">Names: {this.state.names}</span>
        <input
          onChange={e => this.handleChange(e.target.value)}
          className="inputLine"
          type="text"
        />
        <button
          onClick={() => this.filterNames(this.state.userInput)}
          className="confirmationButton"
        >
          Filter
        </button>
        <span className="resultsBox filterStringRB">
          Result: {this.state.filteredNames}
        </span>
      </div>
    );
  }
}
