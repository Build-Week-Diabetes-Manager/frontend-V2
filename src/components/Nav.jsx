import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {UserOutlined} from '@ant-design/icons'
import logo from '../assets/logo-v2.svg'
import { Tooltip, Button } from 'antd';
function Nav() {
  return (
<div className="nav">
  <div className="nav-left"><ul>
    {/* <li><img src={logo} alt=""/></li> */}
    <li><Link className='link' to='/'>Home</Link></li>
      <li><Link className='link' to='/dashboard'>Dashboard</Link></li>
      </ul>
      </div>
      <div className="nav-middle">
        <img src={logo} alt=""/>
      </div>
  <div className="nav-right">
    <div className="user">
    <Tooltip placement="bottom" title={'Zach Young'}>
    <UserOutlined className='user-i' style={{color:"white"}}/>
      </Tooltip>
      </div>

    <div className="logout">Logout</div>
  </div>
  </div>
  );
}

export default Nav;
