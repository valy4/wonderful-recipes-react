import React, { useState, useEffect } from "react";
import RecipeCard from "../RecipeCard";
import "../App.css";
import { Pagination } from "@material-ui/lab";
import Typography from '@material-ui/core/Typography';


function MainContent() {
  // useEffect and useState
  const [recipes, setRecipes] = useState([]); // keep stuff in memory for us to use it
  const [search, setSearch] = useState("vegan");
  const [nrPages, setNrPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const callApiKey = "0bfd9699a1f041569f9c334fa5e31134";
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  // effect that executes when user lands on the page!!!

  useEffect(() => {
    // 1. get some recipes by searching for "vegan"
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${search}&addRecipeInformation=true&apiKey=${callApiKey}`
    )
      .then((response) => response.json())

      .then((data) => {
        // 2. set the state "recipes" to the data we get from the "vegan" search
        setRecipes(data.results);
        const temp = Math.ceil(data.totalResults / 10);
        setNrPages(temp);
        // 3. react "refresh" the UI and shows the recipes because of the recipes.map
      });
  }, [currentPage]);
  const pagesList = [];
  for (let i = 1; i <= nrPages; i++) {
    pagesList.push(i);
  }
  console.log(pagesList)
  console.log(currentPage)

  function getRecipes(event) {
    console.log(event);
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${search}&addRecipeInformation=true&apiKey=${callApiKey}`
    )
      .then((response) => response.json())

      .then((data) => {
        setRecipes(data.results);
        console.log(recipes);
        const temp = Math.ceil(data.totalResults / 10);
        setNrPages(temp);
        const pagesList = [];
        for (let i = 1; i <= nrPages; i++) {
          pagesList.push(i);
        }
      });
  }
  return (
    <div className="container">
      <h1 className="title">Wonderful Recipes</h1>
      <div className="container-search">
        <input
          id="search-bar"
          onChange={(event) => setSearch(event.target.value)}
          type="text"
          placeholder="Search the best recipe..."
        />
        <button className="search-btn" onClick={getRecipes}>
          Search
        </button>
      </div>
      <div className="container-recipes">
        {recipes.map((recipe) => (
          <RecipeCard
            title={recipe.title}
            image={recipe.image}
            id={recipe.id}
          ></RecipeCard>
        ))}
      </div>
      <div className="mapBtn">
        {/* <Typography>Page: {currentPage}</Typography> */}
        <Pagination
          count={nrPages}
          page={currentPage}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
          color="secondary"
        />

      </div>
    </div>
  );
}

export default MainContent;
