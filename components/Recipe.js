export default function Recipe({ title, recipe }) {
  return (
    <div>
      <h1 className="entry-title wprm-recipe-name wprm-block-text-none">
        {title}
      </h1>
      <div className="wprm-recipe-ingredients-container wprm-recipe-ingredients-no-images wprm-recipe-29082-ingredients-container wprm-block-text-normal wprm-ingredient-style-regular wprm-recipe-images-before">
        <h3 className="wprm-recipe-header wprm-recipe-ingredients-header wprm-block-text-none wprm-align-left wprm-header-decoration-none wprm-header-has-actions wprm-header-has-actions">
          Ingredients
        </h3>
        <div className="wprm-recipe-ingredient-group">
          <ul className="wprm-recipe-ingredients">
            {recipe.split("\n").map((line, index) => (
              <li className="wprm-recipe-ingredient" key={index}>
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
