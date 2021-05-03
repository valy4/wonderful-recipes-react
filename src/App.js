import react from "react"
import './App.css';
import { useState } from "react"

const callApiKey = "0bfd9699a1f041569f9c334fa5e31134"
function App() {
  const [recipes, setRecipes] = useState([]) // keep stuff in memory for us to use it
  const [search, setSearch] = useState("")
  function getRecipes(event) {
    console.log(event)
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${search}&addRecipeInformation=true&apiKey=${callApiKey}`
    )
      .then((response) => response.json())

      .then((data) => { setRecipes(data.results) })
    console.log(recipes)
  }
  return (
    <div className="container">
      <h1 className="title">Wonderful Recipes</h1>
      <input id="search-bar" onChange={event => (setSearch(event.target.value))} type="text" placeholder="Search the best recipe..." />
      <button className="recipe-btn" onClick={getRecipes}>Search</button>

      {recipes.map(recipe => <div className="recipe-card">
        <h4>{recipe.title}</h4>
        <img src={recipe.image} />
        <button className="recipe-btn">{recipe.button}See full recipe</button>
      </div>)}
    </div >
  );
}

export default App;
