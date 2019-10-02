import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import {BrowserRouter as Router,Route} from "react-router-dom";
import './App.css';



import NavigationBar from "./components/NavigationBar"
import RegisterUser from "./components/RegisterUser"
import LoginUser from "./components/LoginUser"


import { Navbar } from 'react-bootstrap';


function App() {
  localStorage.setItem('user', {});
  console.log(localStorage.getItem('user'))
  const isLoggedIn = localStorage.getItem('user') === undefined
  console.log(isLoggedIn)
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        {localStorage.getItem('user') == {} ? (
          <Route path="/" exact component={LoginUser}/>
        ) : (
          <Route path="/" exact component={RegisterUser}/>
        )}
        <Route path="/register" exact component={RegisterUser}/>
        <Route path="/login" exact component={LoginUser}/>
      </Router>
    </div>
  );
}

export default App;
