import React from 'react';
import { connect } from 'react-redux';

import SignIn from './SignIn';

const MainContainer = ({ children, user }) => (
  <div className="main-container">
    {/* Header component goes here */}
    <nav className="navbar navbar-default" role="navigation">
      <div className="col-sm-7 col-sm-offset-2" style={{ marginTop: 15 }}>
        <SignIn uid={user.uid || ''} />
      </div>
    </nav>
    <div className="container">
      {children}
    </div>
  </div>
);

MainContainer.propTypes = {
  children: React.PropTypes.object.isRequired,
  user: React.PropTypes.object.isRequired
};

const mapStateToMainContainerProps = (state) => ({ user: state.user });
const Main = connect(mapStateToMainContainerProps)(MainContainer);

export default Main;
