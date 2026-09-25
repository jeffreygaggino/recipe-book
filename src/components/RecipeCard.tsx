import type { Recipe } from "../types";
import { formatCookTime } from "../utils/formatCookTime";
import { TagList } from "./TagList";

type Props = {
  recipe: Recipe;
};

export function RecipeCard(props: Props) {
  return (
    <li>
      {props.recipe.title} • {formatCookTime(props.recipe.cookTimeMins)}
      <TagList tags={props.recipe.tags} />
    </li>
  );
}
