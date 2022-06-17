import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


function Navbar(props) {
  return (
    <>
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to='/home'>{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/about'>{props.about}</Link>
        </li>
        
      </ul>
      <form className="d-flex">
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" onClick={props.togglemode} role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color:props.mode==='dark'?'white':'black'}}>Enable Dark Mode</label>
        </div>
      </form>
    </div>
  </div>
</nav>
   </>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    about : PropTypes.string.isRequired
}

Navbar.defaultProps={
    title : "Text Utils",
    about : "About"
}

export default Navbar