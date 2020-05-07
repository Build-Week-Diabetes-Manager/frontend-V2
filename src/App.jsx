import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from './components/Nav'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import Home from './components/Home'
function App() {
  return (
    <div className="App">
      
    <Router>
    <Nav/>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
        </Switch>
    </Router>
   <Footer/>
    </div>
  );
}

export default App;
