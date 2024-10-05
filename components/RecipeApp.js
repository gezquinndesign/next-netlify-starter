import React from 'react'
import Recipe from './Recipe'

export default function RecipeApp ({recipes, slug}) {
  const [index, setIndex] = React.useState(recipes.findIndex(recipe => recipe.slug === slug) )
  const recipe = recipes[index]

  const previousRecipe = () => {
    setIndex(currentIndex => (currentIndex - 1) % recipes.length)
  }
  const nextRecipe = () => {
    setIndex(currentIndex => (currentIndex + 1) % recipes.length)
  }

  return (
    <div>
      <Recipe {...recipe} />
      <button disabled={index===0} onClick={previousRecipe}>Previous Recipe</button>
      <button disabled={index===recipes.length - 1} onClick={nextRecipe}>Next Recipe</button>
    </div>
  )
}
