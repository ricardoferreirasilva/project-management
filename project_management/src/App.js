import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import {BrowserRouter as Router,Route} from "react-router-dom";
import './App.css';



import NavigationBar from "./components/NavigationBar"
import RegisterUser from "./components/RegisterUser"
import LoginUser from "./components/LoginUser"
import Projects from "./components/Projects"

import { Navbar } from 'react-bootstrap';


function App() {

  return (
    <div className="App">
      <Router>
        <NavigationBar />
        {localStorage.getItem('token') === "" ? (
          <Route path="/" exact component={LoginUser}/>
        ) : (
          <Route path="/" exact component={Projects}/>
        )}
        <Route path="/register" exact component={RegisterUser}/>
        <Route path="/login" exact component={LoginUser}/>
        <Route path="/projects" exact component={Projects}/>
      </Router>
    </div>
  );
}

export default App;
