import { useState } from "react";
import { RecipeList } from "./components/RecipeList";
import { recipes } from "./data/recipes";
import { RecipeDetail } from "./components/RecipeDetail";
import "./App.css";

export function App() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedRecipe = recipes.find(({ id }) => selectedId === id);
  return (
    <main>
      <h1>Recipe Book</h1>
      <RecipeList
        selectedId={selectedId}
        onSelect={setSelectedId}
        recipes={recipes}
      />
      {selectedRecipe && (
        <RecipeDetail
          onClose={() => setSelectedId(null)}
          recipe={selectedRecipe}
        />
      )}
    </main>
  );
}
