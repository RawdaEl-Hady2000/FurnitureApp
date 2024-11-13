import * as React from "react";
import { Link } from 'react-router-dom';
import logo from '../Images/rokna-logo-navbar-transparent-bg-removebg-preview.png';
import { useSelector } from "react-redux";


function Navbar() {
  const cart=useSelector(state=>state.cart)

  return (
   
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
    <div className="container-fluid">
      <img src={logo} alt="My Image" />
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/" relative="path" className="nav-link active" aria-current="page">Home</Link>
          <Link to="/about" relative="path" className="nav-link">About</Link>
          <Link to="/contact" relative="path" className="nav-link">Contact Us </Link>
          <Link to="/reviews" relative="path" className="nav-link">Reviews </Link>
          <Link to="/cart" relative="path" className="nav-link">Cart- {cart.length} </Link>
          <Link to="/admin" relative="path" className="nav-link">Admin</Link>
        </div>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
