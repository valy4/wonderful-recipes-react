import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
const callApiKey = "0bfd9699a1f041569f9c334fa5e31134"

function RecipePage(props) {
  let { id } = useParams();
  const [recipe, setRecipe] = useState({})
  useEffect(function () {
    fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${callApiKey}`)
      .then(response => response.json())
      .then(data => {
        setRecipe(data)
        console.log(data)
      })
    console.log("user landed on the page")
  }, [])
  return (
    <div >
      <h1>RecipePage:{id}</h1>
      <h2>{recipe.title}</h2>

      <GlutenLabel>Gluten free:{recipe.glutenFree ? "yes" : "no"}</GlutenLabel>
    </div>
  )
}
export default RecipePage
const GlutenLabel = styled.p`
    font-weight:900;
    color:#00b894



`