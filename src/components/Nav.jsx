import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import '../App.css';
function Nav() {
  return (
<div className="nav">
  <div className="nav-left"><ul>
    <li>Insuline</li>
  <li><Link to='/'>Home</Link></li>
      <li><Link to='/dashboard'>Dashboard</Link></li>
      </ul></div>
  <div className="nav-right">
    <div className="logout">Logout</div>
  </div>
  </div>
  );
}

export default Nav;
