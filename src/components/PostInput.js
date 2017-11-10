import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postActions from '../actions/posts';

class PostInput extends Component {

  addPost = (post) => {
    this.props.actions.addPost(post)
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.addPost)}>
        <p>
          Title: <Field name="title" component="input" type="text" />
        </p>
        <p>
          Description: <Field name="body" component="textarea" type="text" />
        </p>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

PostInput = reduxForm({
  // a unique name for the form
  form: 'postInput'
})(PostInput)

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(PostInput);
