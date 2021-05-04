import React from "react"
import "../App.css"
import logo from "../Images/logo.png"

function Footer() {
  return (
    <footer>
      <div class="footer-title">
        <p class="footer-link">Wonderful Recipes</p>
        <a href="#">
          <img class="logo" src={logo} />
        </a>
      </div>
      <div class="contact">
        <p class="footer-link">Contact us</p>
        <ul class="footer-list">
          <li>smeu.valentina33@gmail.com</li>
          <li>07405796973</li>
          <li>Beckenham</li>
          <li>London</li>
        </ul>
      </div>
      <div class="footer-legal">
        <p class="footer-link">Legal</p>
        <ul class="footer-list">
          <li>Terms & Conditions</li>
          <li>FAQs</li>
          <li>Privacy Policy</li>
          <li>Cookies Policy</li>
        </ul>
      </div>
    </footer>
  )
}
export default Footer