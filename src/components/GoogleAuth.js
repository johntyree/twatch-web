import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '1067699002799-i6q3tkqkfijursbo03uf5mgh0neprkd7.apps.googleusercontent.com',
        scope: 'email',
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    })
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
        this.props.signOut();
    }
  }

  signIn = () => {
    this.auth.signIn();
  }

  signOut = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return;
    } else if ( !this.props.isSignedIn ) {
      return (
        <button className="ui red google button" onClick={this.signIn}>
          <i className="google icon" />
          Sign In
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={this.signOut}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    }
  }

  render() {
    return (
      <div>
        { this.renderAuthButton() }
      </div>
    );
  }
}

const mapStateToProps = ( state ) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
