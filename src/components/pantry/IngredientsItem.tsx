import Image from "next/image";
import { AnimatePresence, motion, Variants } from "motion/react";
import { IngredientRecipeMatch } from "@/type/IngredientRecipeMatch";

const OBJECT_WIDTH = 64;
const OBJECT_HEIGHT = 64;

const itemVariant: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
};

const IngredientsItem = ({ item }: { item: IngredientRecipeMatch }) => {
  const { ingredients } = item;

  return (
    <div className="flex flex-row">
      <AnimatePresence mode="popLayout">
        {ingredients.map((ingredient, index) => (
          <motion.div
            key={ingredient.id}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={itemVariant}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 15,
              mass: 0.5,
              delay: index * 0.1,
            }}
            className={`relative w-[${OBJECT_WIDTH}px] h-[${OBJECT_HEIGHT}px] flex items-center justify-center ml-[-16px]`}
            style={{
              zIndex: 10 + index,
              rotate: ((index * 73) % 41) - 20,
            }}
          >
            <Image
              id={`ingredient-image-${ingredient.id}`} // Unique ID for the image
              src={ingredient.image_url}
              alt={ingredient.name}
              style={{
                width: `${OBJECT_WIDTH}px`,
                height: `${OBJECT_HEIGHT}px`,
                objectFit: "contain",
              }} // Use CSS for sizing to avoid conflicts with transforms
              className="pointer-events-none outline-img" // To ensure drag works on the parent motion.div
              priority
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default IngredientsItem;
