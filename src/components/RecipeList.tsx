import type { Recipe } from "../types";
import { RecipeCard } from "./RecipeCard";

type Props = {
  recipeArray: Recipe[];
};

export function RecipeList(props: Props) {
  return (
    <ul>
      {props.recipeArray.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </ul>
  );
}
