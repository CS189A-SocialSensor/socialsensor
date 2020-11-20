import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './Styles/NavBar.css';
import './Styles/Login.css';
import './Styles/App.css';
import './Styles/Home.css';
import './Styles/VideoCall.css';
import './Styles/Lobby.css';

import NavBar from './Components/NavBar';
import Login from './Pages/Login';
import UserProfile from './Pages/UserProfile';
import Home from './Pages/Home';
import VideoCall from './Pages/VideoCall';
import About from './Pages/About';


export class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar/>
          <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/videocall" exact component={VideoCall}/>
          <Route path="/userprofile" exact component={UserProfile}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
 
}

export default App;
