import type { Recipe } from "../types";
import { formatCookTime } from "../utils/formatCookTime";
import { TagList } from "./TagList";

type Props = {
  recipe: Recipe;
  onSelect: (id: string) => void;
  onSelectTag: (tag: string) => void;
  isSelected: boolean;
};

export function RecipeCard({
  recipe,
  onSelect,
  isSelected,
  onSelectTag,
}: Props) {
  return (
    <li className={isSelected ? "selected" : undefined}>
      <button type="button" onClick={() => onSelect(recipe.id)}>
        {recipe.title} • {formatCookTime(recipe.cookTimeMins)}
      </button>
      <TagList tags={recipe.tags} onSelectTag={onSelectTag} />
    </li>
  );
}
