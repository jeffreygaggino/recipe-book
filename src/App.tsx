import { useState } from "react";
import { RecipeList } from "./components/RecipeList";
import { recipes } from "./data/recipes";
import { RecipeDetail } from "./components/RecipeDetail";

export function App() {
  const [selectedId, setSelectedId] = useState<string | null>("chilli-crisp");

  const selectedRecipe = recipes.find(({ id }) => selectedId === id);
  return (
    <main>
      <h1>Recipe Book</h1>
      <RecipeList recipes={recipes} />
      {selectedRecipe && <RecipeDetail recipe={selectedRecipe} />}
    </main>
  );
}
