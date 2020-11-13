import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './Styles/navBar.css';
import './Styles/login.css';
import './Styles/App.css';
import './Styles/home.css';

import NavBar from './Components/navBar';
import Login from './Pages/login';
import UserProfile from './Pages/userProfile';
import Home from './Pages/home';
import VideoCall from './Pages/videoCall';
import About from './Pages/about';


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
