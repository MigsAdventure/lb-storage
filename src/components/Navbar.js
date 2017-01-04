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
          <Link className="navbar-brand" to="/"><img id="logo" src="assets/storcoLogo.jpg" /></Link>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav navItemsContainer">
            <li className="linkItem"><Link className="link" to="/">Home</Link> </li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Services<span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">One more separated link</a></li>
              </ul>
            </li>
            <li className="linkItem"><Link className="link" to="/">Home</Link> </li>
            <li className="linkItem"><Link className="link" to="/">Home</Link> </li>
            <li className="linkItem"><Link className="link" to="/">About</Link> </li>
            <li className="linkItem"><Link className="link" to="/">Services</Link> </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
