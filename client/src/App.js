import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
// import axios from 'axios';
import * as actions from './actions';

import Landing from './containers/Landing';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import UserProfile from './containers/UserProfile';


// const UserProfile = () => <h2>User Page</h2>
const GameProfile = () => <h2>Game Page</h2>

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>

        <Router>
          <React.Fragment>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/user-profile" component={UserProfile} />
              <Route exact path="/game-profile" component={GameProfile} />
            </Switch>

          </React.Fragment>
        </Router>

      </div>
    );
  }
}

export default connect(null, actions)(App);
