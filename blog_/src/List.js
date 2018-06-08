import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    };
    this.delete = this.delete.bind(this);
  }

  componentDidUpdate(prevProps, preState) {
    let timeStamp = new Date().toLocaleString();
    let content = this.props.content;
    let blog = {
      time: timeStamp,
      text: content
    };
    if (prevProps.content !== content) {
      this.setState({
        blogs: this.state.blogs.concat(blog)
      });
    } else {
      null;
    }
    console.log(this.state.blogs);
  }

  delete = i => {
    let blogsCopy = this.state.blogs.slice();
    blogsCopy.splice(i, 1);
    this.setState({
      blogs: blogsCopy
    });
    console.log(i);
  };

  render() {
    return (
      <div id="blogs-list">
        {this.state.blogs.length
          ? this.state.blogs.map((blog, i) => (
              <pre key={blog.time}>
                <b>{blog.time}</b>
                <div className="blog-btns">
                  <button onClick={() => this.delete(i)}>del</button>
                </div>
                <hr />
                {blog.text}
              </pre>
            ))
          : null}
      </div>
    );
  }
}

export default List;
