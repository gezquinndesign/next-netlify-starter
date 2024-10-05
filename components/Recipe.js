export default function Recipe({ title, recipe }) {
  return (
    <div vocab="https://schema.org/" typeof="Recipe">
      <h1 data-property="name">{title}</h1>
      <span data-property="author">Gez Quinn</span>,
      <span data-property="recipeYield">1 serving</span>
      <h3 data-property="recipeIngredientsHeader">Ingredients</h3>
      <div className="wprm-recipe-ingredient-group">
        <ul data-property="recipeIngredients">
          {recipe.split("\n").map((line, index) => (
            <li data-property="recipeIngredient" key={index}>
              {line}
            </li>
          ))}
        </ul>
      </div>
      <h3 data-property="recipeIngredientsHeader">Instructions</h3>
      <span data-property="recipeInstructions">
        Blend greens and liquid until smooth.
      </span>
      <span data-property="recipeInstructions">
        Add remaining ingredients and blend again until smooth.
      </span>
    </div>
  );
}
