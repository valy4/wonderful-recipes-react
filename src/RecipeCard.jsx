
import { Link } from "react-router-dom"
import styled from "styled-components"
function RecipeCard(props) {
  return (
    <div className="recipe-card">
      <Title>{props.title}</Title>
      <img src={props.image} />
      <Link to={`/recipe/${props.id}`}><button className="recipe-btn">See full recipe</button></Link>

    </div>
  )
}
export default RecipeCard
const Title = styled.h4`
width: 25rem;
text-align: center;

`