import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import '../App.css';
import logo from '../assets/logo-v2.svg'
function Nav() {
  return (
<div className="nav">
  <div className="nav-left"><ul>
    {/* <li><img src={logo} alt=""/></li> */}
    <li><Link to='/'>Home</Link></li>
      <li><Link to='/dashboard'>Dashboard</Link></li>
      </ul>
      </div>
      <div className="nav-middle">
        <img src={logo} alt=""/>
      </div>
  <div className="nav-right">
    <div className="logout">Logout</div>
  </div>
  </div>
  );
}

export default Nav;
