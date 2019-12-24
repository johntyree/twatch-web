import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';


function StreamItem({ title, description }) {
  return (
    <div className="item">
      <i className="large middle aligned icon camera" />
      <div className="content">
        { title }
        <div className="description">
        { description }
        </div>
      </div>
    </div>
  );
}

class StreamList extends React.Component {

  render() {
    const rendered = this.props.streams.map(stream => {
        return <StreamItem key={stream.id} {...stream} />;
    });
    return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">
        {rendered}
      </div>
    </div>
    );
  }

  componentDidMount() {
    this.props.fetchStreams();
  }

}

const mapStateToProps = ({ streams }) => {
  return { streams: Object.values(streams) };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
