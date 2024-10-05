export default function Recipe({ title, recipe }) {
  return (
    <div vocab="https://schema.org/" typeof="Recipe">
      <h1 property="name">{title}</h1>
      <span property="author">Gez Quinn</span>,
      <span property="recipeYield">1 serving</span>
      <h3 property="recipeIngredientsHeader">Ingredients</h3>
      <div className="wprm-recipe-ingredient-group">
        <ul property="recipeIngredients">
          {recipe.split("\n").map((line, index) => (
            <li property="recipeIngredient" key={index}>
              {line}
            </li>
          ))}
        </ul>
      </div>
      <h3 property="recipeIngredientsHeader">Instructions</h3>
      <span property="recipeInstructions">
        Blend greens and liquid until smooth.
      </span>
      <span property="recipeInstructions">
        Add remaining ingredients and blend again until smooth.
      </span>
    </div>
  );
}
