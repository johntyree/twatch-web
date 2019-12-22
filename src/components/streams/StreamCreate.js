import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';


class StreamCreate extends Component {

  renderInput({ input, label, meta }) {
    const error = meta.touched ? meta.error : "";
    const className = "field " + (error && "error");
    return (
      <div className={className}>
        <label>{ label }: </label>
        <input {...input} placeholder={error} autoComplete="off" />
      </div>
    );
  }

  onSubmit = formValues => {
    this.props.createStream(formValues);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui error form">
        <Field name='title' component={this.renderInput} label="Enter Title" />
        <Field name='description' component={this.renderInput} label="Enter Description" />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'Streams must have a title';
  }
  if (!formValues.description) {
    errors.description = 'Streams must have a description';
  }
  return errors;
};

const formWrapped = reduxForm({
  form: 'streamCreate',
  validate,
})(StreamCreate);

export default connect(
  null,
  { createStream }
)(formWrapped);
