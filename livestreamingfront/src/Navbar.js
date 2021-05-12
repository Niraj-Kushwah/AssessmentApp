
import {useState,useEffect} from "react"
import { Link ,useHistory} from "react-router-dom"
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
var logo="logo.webp"
function Navbar(props) {
  return (
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <Link to="/"> <img src={logo}  class="d-block w-100" alt="..." style={{ height:"80px",maxWidth:"250px"}}/></Link>
    <Link to="/"> <a class="navbar-brand">My VideoStreaming App</a></Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{ marginLeft:"292px" }}>
        <div class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <Link to=""><button className="btn btn-outline-success"><FontAwesomeIcon icon={faSearch} /></button></Link>
    </div>
    
    <div style={{ marginLeft:"5px" }}>
        <Link to="/login"><button className="btn btn-success">Login</button></Link>     
    </div>
  </div>
</nav>
  );
}

export default Navbar
