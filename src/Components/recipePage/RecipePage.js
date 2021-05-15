import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import TitleCardRecipe from "../titlesCard/TitleCardRecipe";

const callApiKey = "0bfd9699a1f041569f9c334fa5e31134";

function RecipePage(props) {
  let { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const [recipeInstructions, setRecipeInstructions] = useState([]);
  const [recipeIngredients, setRecipeIngredients] = useState([]);

  useEffect(function () {
    fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${callApiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipe(data);
        // console.log(data);
      });
    console.log("user landed on the page");
  }, []);

  useEffect(function () {
    fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${callApiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipeInstructions(data.analyzedInstructions[0].steps);
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
      <Container>
        <InstructionsContainer>
          <Subtitles>Instructions</Subtitles>

          {recipeInstructions.map(function (instruction) {
            console.log(recipeInstructions);
            return (
              <p>
                {instruction.number}. {instruction.step}
              </p>
            );
          })}
        </InstructionsContainer>

        <div>
          <Subtitles>Ingredients</Subtitles>
          {recipeIngredients.map(function (ingredient) {
            return (
              <IngredientContainer>
                <p>
                  {ingredient.amount.metric.value}{" "}
                  {ingredient.amount.metric.unit}
                </p>

                <p>-{ingredient.name}</p>
              </IngredientContainer>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
export default RecipePage;

const IngredientContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const InstructionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-left: 5rem;
  background-color: #fee9f1;
  padding-left: 5rem;
  padding-right: 5rem;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50rem;
  color: black;
`;
const Subtitles = styled.p`
  color: #e90b62;
  font-size: 2rem;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-grow: 1;
  justify-content: space-between;
  margin-top: 3rem;
  padding-left: 3rem;
  padding-right: 3rem;
`;
