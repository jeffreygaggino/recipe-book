import { useState } from "react";
import { RecipeList } from "./components/RecipeList";
import { recipes } from "./data/recipes";
import { RecipeDetail } from "./components/RecipeDetail";
import "./App.css";
import { filterRecipes } from "./utils/filterRecipes";

export function App() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const selectedRecipe = recipes.find(({ id }) => selectedId === id);
  const filteredRecipes = filterRecipes(recipes, { query, tag: activeTag });
  return (
    <main>
      <h1>Recipe Book</h1>
      <input
        placeholder="Search recipes"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {activeTag && (
        <p>
          Filtering by: <strong>{activeTag}</strong>{" "}
          <button
            type="button"
            aria-label="Clear tag filter"
            onClick={() => setActiveTag(null)}
          >
            ✕
          </button>
        </p>
      )}
      <RecipeList
        selectedId={selectedId}
        onSelect={setSelectedId}
        onSelectTag={setActiveTag}
        recipes={filteredRecipes}
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
