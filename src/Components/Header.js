import React from "react"
import "../App.css"
import logo from "../Images/logo.png"

function Header() {
  return (
    <>
      <a href="#">
        <img class="logo" src={logo} />
      </a>
      <nav>
        <ul class="nav-list">
          <li class="nav-item">
            <a class="header-link" >Home</a>
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
          <div class="nav-sign-in">
            <li class="nav-item">
              <a class="header-link">Sign In</a>
            </li>
          </div>
        </ul>
      </nav>
    </>
  )
}
export default Header