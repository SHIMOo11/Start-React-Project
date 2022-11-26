import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "./navbar.css"
import{NavLink} from'react-router-dom'



export default function Navbar() {
  return <>
<nav className="navbar navbar-expand-lg navbar-dark sticky-top">
  <div className="container-fluid navinfo w-75">
    <NavLink className="navbar-brand" to="home">START REACT
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <NavLink className="nav-link active aa mx-3" aria-current="page" to="portfolio">PORTFOLIO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active aa mx-3" aria-current="page" to="about">ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active aa mx-3" aria-current="page" to="contact">CONTACT</NavLink>
        </li>
    
      </ul>
      
    </div>
  </div>
</nav>
  </>
}
