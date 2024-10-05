export default function Recipe({ title, recipe }) {
  return (
    <>
      <script type="application/ld+json">
        {`
      {
        "@context": "https://schema.org/",
        "@type": "Recipe",
        "name": "${title}",
        "author": "Gez Quinn",
        "recipeYield": "1 serving",
        "recipeIngredient": [
          ${recipe
            .split("\n")
            .map((line, index) => `"${line}"`)
            .join(",\n")}
        ],
        "recipeInstructions": [
          "Blend greens and liquid until smooth.",
          "Add remaining ingredients and blend again until smooth."
        ]
      }
      `}
      </script>
      <div vocab="https://schema.org/" typeof="Recipe">
        <h1 property="name">{title}</h1>
        <span property="author">Gez Quinn</span>,
        <span property="recipeYield">1 serving</span>
        <h3>Ingredients</h3>
        <div>
          <ul>
            {recipe.split("\n").map((line, index) => (
              <li property="recipeIngredient" key={index}>
                {line}
              </li>
            ))}
          </ul>
        </div>
        <h3>Instructions</h3>
        <ol property="recipeInstructions">
          <li>Blend greens and liquid until smooth.</li>
          <li>Add remaining ingredients and blend again until smooth.</li>
        </ol>
      </div>
    </>
  );
}
