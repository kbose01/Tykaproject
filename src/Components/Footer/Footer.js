import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
   
    


<footer>
  <div class="content">
    <div class="top">
      <div class="logo-details">
        <i class="fab fa-slack"></i>
        <span class="logo_name">TYKA</span>
      </div>
      <div class="media-icons">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
        <a href="#"><i class="fab fa-youtube"></i></a>
      </div>
    </div>
    <div class="link-boxes">
      <ul class="box">
        <li class="link_name">Company</li>
        <li><a href="#">Home</a></li>
        <li><a href="#">Contact us</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Get started</a></li>
      </ul>
      <ul class="box">
        <li class="link_name">Customer Support</li>
        <li><a href="#">Size Chart</a></li>
        <li><a href="#">Fit Guide</a></li>
        <li><a href="#">Fabric Guide</a></li>
        <li><a href="#">Helpdesk</a></li>
      </ul>
      <ul class="box">
        <li class="link_name">Account</li>
        <li><a href="#">Profile</a></li>
        <li><a href="#">My account</a></li>
        <li><a href="#">Prefrences</a></li>
        <li><a href="#">Purchase</a></li>
      </ul>
      <ul class="box">
        <li class="link_name">Usefull Links</li>
        <li><a href="#">Global Dealers</a></li>
        <li><a href="#">Perfect Partners</a></li>
       
      </ul>
      <ul class="box input-box">
        <li class="link_name">Subscribe</li>
        <li><input type="text" placeholder="Enter your email" /></li>
        <li><input type="button" value="Subscribe" /></li>
      </ul>
    </div>
  </div>
  <div class="bottom-details">
    <div class="bottom_text">
      <span class="copyright_text">Copyright © 2024 <a href="#">Tyka </a>All rights reserved</span>
      <span class="policy_terms">
        <a href="#">Privacy policy</a>
        <a href="#">Terms & condition</a>
      </span>
    </div>
  </div>
</footer>
  


  );
}

export default Footer;