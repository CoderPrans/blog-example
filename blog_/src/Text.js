import React, { Component } from "react";

class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleClick() {
    let content = this.state.text;
    this.props.content(content);
    this.setState({
      text: ""
    });
  }

  render() {
    return (
      <div>
        <textarea
          id="blog_content"
          cols="80"
          rows="20"
          placeholder="Type in here...."
          value={this.state.text}
          onChange={this.handleChange}
        />
        <br />
        <button id="post" onClick={this.handleClick}>
          POST
        </button>
      </div>
    );
  }
}

export default Text;
