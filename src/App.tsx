import { RecipeList } from "./components/RecipeList";
import { recipes } from "./data/recipes";

export function App() {
  return (
    <main>
      <h1>Recipe Book</h1>
      <RecipeList recipes={recipes} />
    </main>
  );
}
