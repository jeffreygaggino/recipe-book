export interface Recipe {
  id: string;
  title: string;
  description?: string;
  sourceUrl?: string;
  steps: string[];
  tags: string[];
  ingredientGroups: IngredientGroup[];
  cookTimeMins: number;
  notes?: string[];
}

export type IngredientGroup = {
  name: string;
  items: string[];
};
