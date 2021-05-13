import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import TitleCardRecipe from "../titlesCard/TitleCardRecipe";

const callApiKey = "0bfd9699a1f041569f9c334fa5e31134";

function RecipePage(props) {
  let { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const [recipeIngredients, setRecipeIngredients] = useState([]);

  useEffect(function () {
    fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${callApiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipe(data);
        console.log(data);
      });
    console.log("user landed on the page");
  }, []);

  useEffect(function () {
    fetch(
      `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${callApiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "ingredients.data");

        setRecipeIngredients(data.ingredients);

        console.log("user landed on the page");
      });
  }, []);

  // console.log(data)

  return (
    <div>
      <TitleCardRecipe
        title={recipe.title}
        isImage={true}
        image={recipe.image}
      />

      <div>{recipe.instructions}</div>
      <div>
        {recipeIngredients.map(function (ingredient) {
          return (
            <IngredientContainer>
              <p>
                {ingredient.amount.metric.value} {ingredient.amount.metric.unit}
              </p>
              {" "}
              <p>{ingredient.name}</p>
            </IngredientContainer>
          );
        })}
      </div>


    </div>
  );
}
export default RecipePage;



const IngredientContainer = styled.div`
  display: flex;
`;
