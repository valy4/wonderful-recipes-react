import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
const callApiKey = "0bfd9699a1f041569f9c334fa5e31134"

function RecipePage(props) {
  let { id } = useParams();
  const [recipe, setRecipe] = useState({})
  const [recipeIngredients, setRecipeIngredients] = useState({})

  useEffect(function () {
    fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${callApiKey}`)
      .then(response => response.json())
      .then(data => {
        setRecipe(data)
        console.log(data)
      })
    console.log("user landed on the page")
  }, [])

  useEffect(function () {
    fetch(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${callApiKey}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)

        for (let i = 0; i < recipeIngredients.length; i++) {
          recipe.recipeIngredients = recipeIngredients[i].name;
          setRecipeIngredients(data)


        }
        console.log("user landed on the page")
      }

      )
  }, [])


  // console.log(data)

  return (
    <div >
      <h1>RecipePage:{id}</h1>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} />
      <div>{recipe.instructions}</div>
      <div>{recipeIngredients.ingredients}</div>


      {/* <GlutenLabel>Gluten free:{recipe.glutenFree ? "yes" : "no"}</GlutenLabel> */}

    </div>
  )

}
export default RecipePage



  // const GlutenLabel = styled.p`
  //   font-weight:900;
  //   color:#00b894



