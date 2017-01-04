import React from 'react';
import { Link } from 'react-router';

export default function Navbar(props) {
  return(
    <nav className="navbar navbar-inverse">
      <div className="navBarContainer">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#"><img id="logo" src="assets/storcoLogo.jpg" /></a>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav navItemsContainer">
            <li className="linkItem"><Link className="link" to="/">Home</Link> </li>
            <li className="linkItem"><Link className="link" to="/">About</Link> </li>
            <li className="linkItem"><Link className="link" to="/">Services</Link> </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
