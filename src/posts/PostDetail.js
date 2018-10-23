import React, { Component } from 'react'

class PostDetail extends Component {

  constructor(props){
    super(props);
    this.titleWasClicked = this.titleWasClicked.bind(this);
    this.toggleContent = this.toggleContent.bind(this);
    this.state = {
      showContent : true
    }
  }

  toggleContent(event){
    event.preventDefault();
    const {showContent} = this.state;
    this.setState({
      showContent : !showContent
    });
  }

  titleWasClicked(event){
    const {dataCallback} = this.props;
    dataCallback("Hello There");
    alert("Hello There");
  }

  render () {
    const {showContent} = this.state;
    const {post} = this.props
    return (
      <div>
        <h1 onClick={this.titleWasClicked}>{post.title}</h1>
        <p>{post.content}</p>
        <button onClick={this.toggleContent}>Toggle content display</button>
        {showContent ===true ? <p>{post.content}</p> : ""}
      </div>
    )
  }
}

export default PostDetail
