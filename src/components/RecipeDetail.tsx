import type { Recipe } from "../types";

type Props = {
  recipe: Recipe;
};

export function RecipeDetail({ recipe }: Props) {
  return (
    <div>
      <h2>{recipe.title}</h2>
      {recipe.description && <div>{recipe.description}</div>}
      {recipe.sourceUrl && (
        <a href={recipe.sourceUrl} target="_blank" rel="noreferrer">
          Inspiration
        </a>
      )}
      {recipe.ingredientGroups.map((group) => (
        <div key={group.name}>
          <h3>{group.name}</h3>
          <ul>
            {group.items.map((item) => (
              <li key={item}> {item} </li>
            ))}
          </ul>
        </div>
      ))}
      <h3>Steps</h3>
      <ol>
        {recipe.steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
      {recipe.notes && recipe.notes.length > 0 && (
        <div>
          <h3>Notes</h3>
          <ul>
            {recipe.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
