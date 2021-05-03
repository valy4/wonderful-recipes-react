function RecipeCard(props) {
  return (
    <div className="recipe-card">
      <h4>{props.title}</h4>
      <img src={props.image} />
      <button className="recipe-btn">See full recipe</button>
    </div>
  )
}
export default RecipeCard