import React from "react"
import "../../App.css"
import { Link } from "react-router-dom"

function AboutCard(props) {
  return (
    <div className="about-us-container" style={{ flexDirection: props.isReversed ? "row-reverse" : "row", backgroundColor: props.bkgColor }} >
      <img className="about-us" src={props.imgUrl} alt="about-us"></img>
      <div className="about-us-right">
        <h1>{props.title}</h1>
        <p>{props.info}</p>
        <Link to={"/AboutInfo/"}><button className="search-btn" style={{ backgroundColor: props.btnColor }}>Find out more</button></Link>
      </div>
    </div>)
}
export default AboutCard