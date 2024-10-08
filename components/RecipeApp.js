import React from 'react'
import Recipe from './Recipe'

export default function RecipeApp ({recipes, slug = 'cherry-on-top'}) {
  console.log('slug', slug, recipes)
  const recipe = recipes.find((recipe) => recipe.slug === slug)
  return (
    <div>
      <Recipe {...recipe} />
    </div>
  )
}
