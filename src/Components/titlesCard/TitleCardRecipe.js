import React from "react"



function TitleCardRecipe(props) {
  return (
    <div className="about-photo" backgroundImage={props.image}  >
      <div className="about-scris">
        {/* <img className="logo" src={props.logo} /> */}
        <h1>{props.title}</h1>
        <p className="who-we-are">{props.info}</p>
      </div>
    </div >)
}
export default TitleCardRecipe