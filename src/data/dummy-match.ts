import { IngredientRecipeMatch } from "@/type/IngredientRecipeMatch";
import ChickenImg from "@/images/ingredients/chicken-breast.png";
import GarlicImg from "@/images/ingredients/garlic.png";
import MilkImg from "@/images/ingredients/milk.png";
import EggImg from "@/images/ingredients/egg.png";
import OilImg from "@/images/ingredients/oil.png";
import OnionImg from "@/images/ingredients/onion.png";
import TomatoImg from "@/images/ingredients/tomato.png";
import PotatoImg from "@/images/ingredients/potato.png";
import FlourImg from "@/images/ingredients/flour.png";
import PastaImg from "@/images/ingredients/pasta.png";
import RiceImg from "@/images/ingredients/rice.png";
import SugarImg from "@/images/ingredients/sugar.png";
import BeefImg from "@/images/ingredients/beef-slices.png";
import GingerImg from "@/images/ingredients/ginger.png";
import CurryImg from "@/images/ingredients/curry-block.png";
import ScallionImg from "@/images/ingredients/scallion.png";

const dummyIngredientRecipeMatch: IngredientRecipeMatch[] = [
  {
    ingredients: [
      {
        id: 1,
        image_url: TomatoImg,
        name: "Tomato",
      },
      {
        id: 2,
        image_url: EggImg,
        name: "Eggs",
      },
      {
        id: 3,
        image_url: OilImg,
        name: "Oil",
      },
      {
        id: 4,
        image_url: GarlicImg,
        name: "Garlic",
      },
    ],
    recipe: {
      id: 1,
      name: "Tomato and Egg Stir-fry",
      image_url:
        "https://npeumniwtoipfvuqqqwl.supabase.co/storage/v1/object/public/recipe-images/20231103000214-andy-20cooks-20-20tomato-20egg-20stir-fry.webp",
    },
  },
  {
    ingredients: [
      {
        id: 5,
        image_url: PotatoImg,
        name: "Potato",
      },
      {
        id: 6,
        image_url: BeefImg,
        name: "Beef Slices",
      },
      {
        id: 7,
        image_url: CurryImg,
        name: "Curry Block",
      },
      {
        id: 8,
        image_url: OnionImg,
        name: "Onion",
      },
    ],
    recipe: {
      id: 2,
      name: "Curry Beef Slices",
      image_url:
        "https://npeumniwtoipfvuqqqwl.supabase.co/storage/v1/object/public/recipe-images/Japanese-Beef-Curry-7588-III.jpg",
    },
  },
  {
    ingredients: [
      {
        id: 9,
        image_url: ChickenImg,
        name: "Chicken",
      },
      {
        id: 10,
        image_url: OilImg,
        name: "Oil",
      },
      {
        id: 11,
        image_url: GingerImg,
        name: "Ginger",
      },
      {
        id: 12,
        image_url: ScallionImg,
        name: "Scallion",
      },
    ],
    recipe: {
      id: 3,
      name: "Ginger Scallion Chicken",
      image_url:
        "https://npeumniwtoipfvuqqqwl.supabase.co/storage/v1/object/public/recipe-images/ginger-scallion-chicken-12.jpg",
    },
  },
];

export default dummyIngredientRecipeMatch;
