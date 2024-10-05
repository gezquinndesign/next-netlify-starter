import Head from "next/head";
import { RecipeJsonLd } from "next-seo";

export default function Recipe({ title, recipe }) {
  return (
    <>
      <RecipeJsonLd
        name={title}
        authorName="Gez Quinn"
        description="A healthy green smoothie recipe."
        prepTime="PT5M"
        cookTime="PT0M"
        image="https://friendly-cheesecake-e6101a.netlify.app/green-smoothie.jpg"
        yields="1"
        ingredients={recipe ? recipe.split("\n") : []}
        instructions={[
          {
            name: '1',
            text: "Blend greens and liquid until smooth.",
          },
          {
            name: '2',
            text: "Add remaining ingredients and blend again until smooth.",
          }
        ]}
      />
      <div>
        <img
          src="https://friendly-cheesecake-e6101a.netlify.app/green-smoothie.jpg"
          alt="Green Smoothie"
        />
        <h1>{title}</h1>
        <span>Gez Quinn</span>,<span>1 serving</span>
        <h3>Ingredients</h3>
        <div>
          <ul>
            {(recipe ? recipe.split("\n"):[]).map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </div>
        <h3>Instructions</h3>
        <ol>
          <li>Blend greens and liquid until smooth.</li>
          <li>Add remaining ingredients and blend again until smooth.</li>
        </ol>
      </div>
    </>
  );
}
