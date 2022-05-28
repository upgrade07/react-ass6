import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div class="navbar navbar-expand-lg bg-dark" id='navBar'>
      <div><Link to="/home"><button className='btn btn-outline-success'>Home </button></Link></div>
          <div><Link to={'/student'}><button className='btn btn-outline-primary'>Student </button></Link></div>
          <div><Link to={'contact'}><button className='btn btn-outline-warning'>Contact Us </button></Link></div>
    </div>
  );
};

export default Header;