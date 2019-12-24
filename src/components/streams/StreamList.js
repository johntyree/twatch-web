import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';


function StreamItem({ stream, currentUserId }) {
  var adminButtons = "";
  if (stream.userId === currentUserId) {
    adminButtons = (
      <div className="right floated content">
        <Link to={`/streams/edit/${stream.id}`}
              className="ui button primary">Edit</Link>
        <Link to={`/streams/delete/${stream.id}`}
              className="ui button negative">Delete</Link>
      </div>
    );
  };

  return (
    <div className="item">
      { adminButtons }
      <i className="large middle aligned icon camera" />
      <div className="content">
        { stream.title }
        <div className="description">
        { stream.description }
        </div>
      </div>
    </div>
  );
}

class StreamList extends React.Component {

  renderCreate() {
    if (this.props.currentUserId) {
      return (
      <div className="ui secondary pointed menu">
        <div className="right menu">
          <Link to="/streams/new" className="ui button primary">
          CreateStream
          </Link>
        </div>
      </div>
      );
    }
  }

  render() {
    const renderedList = this.props.streams.map(stream => {
      return <StreamItem key={stream.id} stream={stream} currentUserId={this.props.currentUserId} />;
    });
    return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">
        {renderedList}
      </div>
      { this.renderCreate() }
    </div>
    );
  }

  componentDidMount() {
    this.props.fetchStreams();
  }

}

const mapStateToProps = ({ streams, auth }) => {
  return {
    streams: Object.values(streams),
    currentUserId: auth.userId
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
