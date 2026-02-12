import type { StaticImageData } from "next/image";

export type IngredientRecipeMatch = {
  ingredients: Array<{
    id: number;
    image_url: StaticImageData | string;
    name: string;
  }>;
  recipe: {
    id: number;
    name: string;
    image_url: StaticImageData | string;
  };
};
