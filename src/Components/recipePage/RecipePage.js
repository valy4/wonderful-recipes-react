import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import RecipeCard from "../../RecipeCard";

import TitleCardRecipe from "../titlesCard/TitleCardRecipe";

const callApiKey = "0bfd9699a1f041569f9c334fa5e31134";

function RecipePage(props) {
  let { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const [recipeInstructions, setRecipeInstructions] = useState([]);
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [recipeSimilar, setSimilar] = useState([])
  const [favorites, setFav] = useState(localStorage.getItem("favRecipes"), [])

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

  useEffect(function () {
    fetch(
      `https://api.spoonacular.com/recipes/${id}/similar?number=3&apiKey=${callApiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "similar-data");

        setSimilar(data);
      });
  }, []);
  useEffect(() => {
    localStorage.getItem("favRecipes", favorites)
  }, [favorites])

  return (
    <div>
      <TitleCardRecipe
        title={recipe.title}
        isImage={true}
        image={recipe.image}
      />
      {/* {favorites.includes(recipe.id) ? (
        <button

          onClick={() => {
            // filter the ones that are not our favourite
            const newFavList = favorites.filter(
              (fav) => fav !== recipe.id
            );

            // update state
            setFav(newFavList);
          }}
        >
          Remove from favorites
        </button>
      ) : (
        <button

          onClick={() => {
            if (!favorites.includes(recipe.id)) {
              setFav([...favorites, recipe.id]);
            }
          }}
        >
          Add to favorite
        </button>
      )} */}
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
      <SimilarSubtitle>
        <h1>YOU MAY ALSO LIKE</h1>
      </SimilarSubtitle>
      <Similar>
        {recipeSimilar.map(recipe => <RecipeCard title={recipe.title} image={recipe.image} id={recipe.id} ></RecipeCard>)}
      </Similar>
    </div>
  );
}
export default RecipePage;

const IngredientContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 480px) {

  }
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
  @media only screen and (max-width: 480px) {
    margin-left: 0px;
    width: 23rem;
    padding:5px;
    margin:5px;
    text-align: justify;

  }
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
  @media only screen and (max-width: 480px) {
    flex-direction: column-reverse;
    padding: 5px;
  }
`;
const SimilarSubtitle = styled.div`
display: flex;
justify-content: center;
  color: #e90b62;
  font-size: 1rem;
  background-color:#f6f7f8;
  margin-top:3rem;
 @media only screen and (max-width: 480px) {
   text-align: center;
    padding: 5px;
  }
`
const Similar = styled.div`
display:flex;
justify-content:space-around;
background-color:#f6f7f8;
padding-top:2rem;
padding-bottom:2rem;

@media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 5px;
    margin:0px;
    width: 23rem;
  }

`