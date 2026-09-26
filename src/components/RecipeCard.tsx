import type { Recipe } from "../types";
import { formatCookTime } from "../utils/formatCookTime";
import { TagList } from "./TagList";

type Props = {
  recipe: Recipe;
};

export function RecipeCard({ recipe }: Props) {
  return (
    <li>
      {recipe.title} • {formatCookTime(recipe.cookTimeMins)}
      <TagList tags={recipe.tags} />
    </li>
  );
}
