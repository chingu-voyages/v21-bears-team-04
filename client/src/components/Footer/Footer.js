import React from "react";
import "./Footer.css";

//public + private router footer

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-app-details">
        <div className="Footer-title">
          <h1>FitX</h1>
          <h2>Social Fitness App</h2>
        </div>
        <div className="Footer-description">
          <h3>
            This app is designed for people who are ready to make themselves
            better!
          </h3>
          <br/>
          <h5>All rights reserved by @FitX</h5>
        </div>
      </div>
      <div className="Footer-links">
        <ul>
          <h2>Product</h2>
          <li>Blog</li>
          <li>Prices</li>
          <li>Reviews</li>
        </ul>

        <ul>
          <h2>Company</h2>
          <li>About Us</li>
          <li>The Brand</li>
          <li>For the Press</li>
          <li>Contacts</li>
        </ul>
        <ul>
          <h2>Legal</h2>
          <li>Privacy Policy</li>
          <li>Cookies</li>
          <li>Terms of Use</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
