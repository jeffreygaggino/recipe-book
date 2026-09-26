import type { Recipe } from "../types";
import { RecipeCard } from "./RecipeCard";

type Props = {
  recipes: Recipe[];
  onSelect: (id: string) => void;
  selectedId: string | null;
};

export function RecipeList({ recipes, onSelect, selectedId }: Props) {
  return (
    <ul>
      {recipes.map((recipe) => (
        <RecipeCard
          isSelected={selectedId === recipe.id}
          onSelect={onSelect}
          key={recipe.id}
          recipe={recipe}
        />
      ))}
    </ul>
  );
}
