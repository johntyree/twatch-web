import React from 'react';
import StreamForm from './StreamForm';
import { connect } from 'react-redux';
import { createStream } from '../../actions';


const StreamCreate = ({ createStream }) => {
  return (
    <div>
      <h3>Create Stream</h3>
      <StreamForm onSubmit={createStream} />
    </div>
  );
}

export default connect(
  null,
  { createStream }
)(StreamCreate);
