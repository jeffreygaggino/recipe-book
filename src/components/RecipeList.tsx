import type { Recipe } from "../types";
import { RecipeCard } from "./RecipeCard";

type Props = {
  recipes: Recipe[];
};

export function RecipeList({ recipes }: Props) {
  return (
    <ul>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </ul>
  );
}
