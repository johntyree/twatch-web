import React from 'react';
import { connect } from 'react-redux';
import { editStream, fetchStream } from '../../actions';
import StreamForm from './StreamForm';


class StreamEdit extends React.Component {

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.stream) return <div className="ui active loader"></div>;
    return (
      <div>
        <h3>Edit your Stream</h3>
        <StreamForm initialValues={this.props.stream}
                    onSubmit={this.props.editStream} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    ...ownProps,
    stream: state.streams[id],
  };
};

export default connect(
  mapStateToProps,
  { editStream, fetchStream },
)(StreamEdit);
