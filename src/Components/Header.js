import React from "react"
import "../App.css"
import logo from "../Images/logo.png"

function Header() {
  return (
    <header className="box">
      <a href="#">
        <img class="logo" src={logo} />
      </a>
      <nav>
        <ul class="nav-list">
          <li class="nav-item">
            <a class="header-link-home" >Home</a>
          </li>
          <li class="nav-item">
            <a class="header-link" >Recipes</a>
          </li>
          <li class="nav-item">
            <a class="header-link" >Deserts</a>
          </li>
          <li class="nav-item">
            <a class="header-link" >Contact</a>
          </li>

          <li class="nav-item">
            <button class="header-link-btn">Sign In</button>
          </li>

        </ul>
      </nav>
    </header>
  )
}
export default Header