import type { Recipe } from "../types";
import { RecipeCard } from "./RecipeCard";

type Props = {
  recipes: Recipe[];
  onSelect: (id: string) => void;
  onSelectTag: (tag: string) => void;
  selectedId: string | null;
};

export function RecipeList({
  recipes,
  onSelect,
  selectedId,
  onSelectTag,
}: Props) {
  if (recipes.length === 0) {
    return <p>No recipes match.</p>;
  }
  return (
    <ul>
      {recipes.map((recipe) => (
        <RecipeCard
          isSelected={selectedId === recipe.id}
          onSelect={onSelect}
          onSelectTag={onSelectTag}
          key={recipe.id}
          recipe={recipe}
        />
      ))}
    </ul>
  );
}
