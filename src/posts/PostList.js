import React, { Component } from 'react'
import PostData from '../data/posts.json'

import PostDetail from './PostDetail'

class PostList extends Component {

  constructor(props){
    super(props);
    this.handleDataCallback = this.handleDataCallback.bind(this);
  }

  handleDataCallback(txtMsg){
    console.log(this);
    console.log(txtMsg);
  }

  render () {
    return (
      <div >
        <h1>Hello There</h1>
        {PostData.map((item, index) => {
          return <PostDetail post={item} dataCallback={this.handleDataCallback} key={`post-list-key ${index}`} />
        })}
      </div>
    )
  }
}

export default PostList
