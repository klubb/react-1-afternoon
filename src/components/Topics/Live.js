import React, { Component } from "react";
export default class Live extends Component {
  constructor() {
    super();
    this.state = {
      userInput: ""
    };
  }

  handeChange = val => {
    this.setState({
      userInput: val
    });
  };
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Live</h4>
        <input
          onChange={e => this.handeChange(e.target.value)}
          className="inputLine"
          type="text"
        />

        <span className="resultsBox">{this.state.userInput}</span>
      </div>
    );
  }
}
