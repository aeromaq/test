import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {MdFingerprint} from 'react-icons/md'
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavBar.css'

const NavBar = () => {

const [backgroundChange, setBackgroundChange] = useState(false);
const changeBackground = () =>{
    if(window.scrollY >= 65){
        setBackgroundChange(true);
    }
    else{
        setBackgroundChange(false);
    }
 };
 window.addEventListener('scroll', changeBackground);


  return (
    <div>
        <div className="navbar">
            <div className={backgroundChange?'navbar-container active':'navbar-container'}>
                <NavLink  exact to='/' className="navbar-logo">
                     AMQ
                </NavLink>
                <div className="navbar-links-container">
                <NavLink  exact activeClassName="navbar-link active" to='/' className="navbar-link" >
                    Home
                </NavLink>
                <NavLink  exact activeClassName="navbar-link active" to='/works' className="navbar-link" >
                    Works
                </NavLink>
                <NavLink exact activeClassName="navbar-link active" to='/services' className="navbar-link">
                    Services
                </NavLink>
                <NavLink  to='/inquire' className="border-link ">
                    Inquire
                </NavLink>
                
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default NavBar;