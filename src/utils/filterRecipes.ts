import type { Recipe } from "../types";

export type RecipeFilters = {
  query: string;
  tag: string | null;
};

export function filterRecipes(
  recipes: Recipe[],
  { query, tag }: RecipeFilters,
): Recipe[] {
  const cleanQuery = query.trim().toLowerCase();
  const matchesQuery = (text: string) =>
    text.toLowerCase().includes(cleanQuery);

  const matchesTags = (tags: string[]) => tag === null || tags.includes(tag);
  return recipes.filter(
    ({ title, tags }) => matchesQuery(title) && matchesTags(tags),
  );
}
