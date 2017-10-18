import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PostInput from './components/PostInput';
import './App.css';
import * as postActions from './actions/posts';

export class App extends Component {
  componentDidMount() {
    this.props.actions.fetchPosts();
  }

  render() {
    const thePosts = this.props.posts.map(post => (
      <ul>
        <li style={{ border: '1px solid black' }}>
          <p>ID: {post.id}</p>
          <p>Title: {post.title}</p>
          <p>description: {post.body}</p>
        </li>
      </ul>
    ));
    return (
      <div>
        <PostInput />
        {thePosts}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postActions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
