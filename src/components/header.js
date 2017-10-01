import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// import * as actions from '../actions';
import { auth } from '../actions/index';

class Header extends Component {
  authButton(){
    if (this.props.authenticated){
      return <button onClick={() => this.props.auth(false)}> Sign Out </button>;
    }
    return <button onClick={() => this.props.auth(true)}> Sign In </button>;
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        < ul className="navbar navbar-nav" >
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="resources/"> Resources </Link>
          </li>
          <li className="nav-item">
            {this.authButton()}

          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.authenticated
  };
};

export default connect(mapStateToProps, { auth })(Header);