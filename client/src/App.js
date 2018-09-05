import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'


import Landing from './containers/Landing';
import Navbar from './components/Navbar';

// const Landing = () => <h2>NOT logged in! Here is Landing Page & sign in butt.</h2>
const Home = () => <h2>Logged in! Here is Home Page</h2>
const UserProfile = () => <h2>User Page</h2>
const GameProfile = () => <h2>Game Page</h2>


class App extends Component {
  render() {
    return (
      <div className="App">

        <Router>
          <React.Fragment>
            <Navbar />
            
            <Route exact path="/" component={Landing} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/user-profile" component={UserProfile} />
            <Route exact path="/game-profile" component={GameProfile} />

          </React.Fragment>
        </Router>

      </div>
    );
  }
}

export default App;
