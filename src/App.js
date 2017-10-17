import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PostInput from './components/PostInput';
import './App.css';
import { getAllPosts } from './actions/posts';

export class App extends Component {
  componentDidMount() {
    this.props.getAllPosts();
  }

  render() {
    const thePosts = this.props.posts.map(post => (
      <ul>
        <li style={{ border: '1px solid black' }}>
          <p>Title: {post.title}</p>
          <p>Body: {post.body}</p>
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
    getAllPosts: bindActionCreators(getAllPosts, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
