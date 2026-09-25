import { recipes } from "./data/recipes";

function App() {
  return (
    <main>
      <h1>Recipe Book</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            {recipe.title} • {recipe.cookTimeMins} minutes
            <ul>
              {recipe.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
