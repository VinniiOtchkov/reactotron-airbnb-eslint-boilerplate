import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { addNewPost } from '../actions/posts'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class PostInput extends Component {
  addNewPost = (post) => {
    this.props.addNewPost(post)
  }

  render () {
    return (
      <form onSubmit={this.props.handleSubmit(this.addNewPost)}>
        <p>
          Title: <Field name="title" component="input" type="text" />
        </p>
        <p>
          Body: <Field name="body" component="textarea" type="text" />
        </p>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

PostInput = reduxForm({
  // a unique name for the form
  form: 'postInput'
})(PostInput)

function mapDispatchToProps(dispatch) {
  return {
    addNewPost: bindActionCreators(addNewPost, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(PostInput);
