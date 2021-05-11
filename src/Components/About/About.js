import React from "react"
import "../../App.css"
import logo from "../../Images/logo.png"
import about from "../../Images/about-us.jpg"
import AboutCard from "./AboutCard.js"
import partners from "../../Images/our-partners.jpg"
import TitleCard from "../titlesCard/TitleCard.js"


function About() {
  return (
    <>

      <TitleCard logo={logo} title="ABOUT" info="Who we are and what we do" />
      <AboutCard bkgColor={"#55efc4"} isReversed={false} imgUrl={about} title="ABOUT US" info="Learn more about our lifesaving work" />
      <AboutCard isReversed={true} imgUrl={partners} title="OUR PARTNERS" info="We are proud to work with these organisations" />
      <AboutCard isReversed={false} imgUrl={partners} title="MEET THE TEAM" info="Get to know our dedicated international team" />
    </>
  )
}
export default About