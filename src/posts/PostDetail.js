import React, { Component } from 'react'

class PostDetail extends Component {
  titleWasClicked(event){
    alert("Hello There");
  }
  render () {
    const {post} = this.props
    return (
      <div>
        <h1 onClick={this.titleWasClicked}>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    )
  }
}

export default PostDetail
