import React, { Component } from "react";
import "./App.css";
import Text from "./Text.js";
import List from "./List.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
    this.handleContent = this.handleContent.bind(this);
  }

  handleContent(text) {
    this.setState({
      content: text
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">simple blog app</h1>
        <Text content={this.handleContent} textEdit={this.state.toEdit} />
        <List content={this.state.content} />
      </div>
    );
  }
}

export default App;
