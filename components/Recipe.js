export default function Recipe({ title, recipe }) {
  return (
    <div vocab="https://schema.org/" typeof="Recipe">
      <h1 data-property="name">{title}</h1>
      By <span data-property="author">Gez Quinn</span>,
      <meta data-property="datePublished" content="2024-10-05">
        May 8, 2009
      </meta>
      {/* <img data-property="image" src="bananabread.jpg"
  alt="Banana bread on a plate" /> */}
      {/* <span data-property="description">This classic banana bread recipe comes
from my mom -- the walnuts add a nice texture and flavor to the banana
bread.</span> */}
      {/* Prep Time: <meta data-property="prepTime" content="PT15M">15 minutes
Cook time: <meta data-property="cookTime" content="PT1H">1 hour */}
      Yield: <span data-property="recipeYield">1 loaf</span>
      {/* Tags: <link data-property="suitableForDiet" href="https://schema.org/LowFatDiet" />Low Fat */}
      {/* <div data-property="nutrition" typeof="NutritionInformation">
  Nutrition facts:
  <span data-property="calories">240 calories</span>,
  <span data-property="fatContent">9 grams fat</span>
</div> */}
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
      <h3 data-property="recipeIngredientsHeader">Instrunctions</h3>
      <span data-property="recipeInstructions">
        Blend greens and liquid until smooth.
      </span>
      <span data-property="recipeInstructions">
        Add remaining ingredients and blend again until smooth.
      </span>
    </div>
  );
}
