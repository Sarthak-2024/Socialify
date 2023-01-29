import React from 'react'

import './left.css';
import logo  from '../../assets/logo/logo.svg';
import home from '../../assets/logo/home.svg';
import hashtag from '../../assets/logo/hashtag.svg';
import user from '../../assets/logo/user.svg';
import bell from '../../assets/logo/bell.svg';
import { Link } from 'react-router-dom';
const Left = () => {
  return (
    <>


 <div className="leftOuter">
 
  <div className="menubar">
  <div className="logo">
  <Link to={'/'}>
 <img className="logoImg" src={logo} alt="" />
    </Link>
  </div>
    <Link to={'/'}>
    <div className="home menubarMenuItems">
    <img className="logoImg" src={home} alt="" />
   
    <span className="menuBarItemText">
    Home
    </span>
   
    </div>
    </Link>
    <Link to='/trending'>
    <div className="Trending menubarMenuItems">
    <img className="logoImg" src={hashtag} alt="" />
 
    
    <span className="menuBarItemText">
    Trending
    </span>
    </div>
    </Link>
    <Link to={'notifications/cheemsop'}>
    <div className="Notifications menubarMenuItems">
    <img className="logoImg" src={bell} alt="" />
 
    <span className="menuBarItemText">
    Notification 
    </span>
    </div>
    </Link>
    <Link to='/profile/chemmsOp'>
    <div className="Profile menubarMenuItems">
    <img className="logoImg" src={user} alt="" />
    
    <span className="menuBarItemText">
    Profile 
    </span>
    </div>
    </Link>
  </div>
  <div className="LoginLeft menubarMenuItems">
  <Link to='/login'>
    <span className="LoginLeftText">
    

    Login
    </span>
  </Link>
      
  </div>
 </div>
    </>
  )
}

export default Left