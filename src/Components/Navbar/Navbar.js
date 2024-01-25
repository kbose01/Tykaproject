import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
function Navbar(){
    return(
        <div>
<nav class="navbar navbar-default">
  <div class="container-fluid">
   
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand"><img src="https://www.tyka.com/IN/wp-content/uploads/2023/07/tykabird_02.jpg"></img></a>
    </div>


    <div class="b collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="a nav navbar-nav">
       <li><Link to="/">Home</Link></li>
        <li><Link to="/Men">Men</Link></li>
        <li><Link to="/Women">Women</Link></li>
        <li><Link to="/Accessories">Accessories</Link></li>
      </ul>
      <ul class="a nav navbar-nav navbar-right">
        <li><a href="#">Login</a></li>
        <li><a href="#">Sign up</a></li>
        
      </ul>
    </div>
    
  </div>
</nav>
</div>
    );
}
export default Navbar;