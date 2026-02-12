import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import IngredientsItem from "@/components/pantry/IngredientsItem";
import dummyIngredientRecipeMatch from "@/data/dummy-match";
import TextLoop from "../TextLoop";
import LightRays from "../LightRay";

export default function AnimatedHero() {
  const [currentMatch, setCurrentMatch] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (currentMatch === dummyIngredientRecipeMatch.length - 1) {
        setCurrentMatch(0);
      } else {
        setCurrentMatch(currentMatch + 1);
      }
    }, 4000);
    return () => clearTimeout(timeoutId);
  }, [currentMatch]);

  return (
    <div className="h-screen relative flex gap-8 py-20 lg:py-40 items-center justify-center flex-col z-[1]">
      <LightRays
        raysOrigin="top-left"
        raysColor="#FE3300"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays"
      />
      <h1 className="text-5xl md:text-7xl tracking-tighter text-center font-regular mb-">
        <span className="text-foreground flex flex-row gap-6 justify-center mb-1">
          Scan
          <IngredientsItem item={dummyIngredientRecipeMatch[currentMatch]} />
        </span>
        Make{" "}
        <TextLoop
          className="font-semibold"
          externalIndex={currentMatch}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 15,
            mass: 0.5,
          }}
          variants={{
            initial: {
              y: 40,
              opacity: 0,
            },
            animate: {
              y: 0,
              opacity: 1,
            },
            exit: {
              y: -40,
              opacity: 0,
            },
          }}
        >
          {dummyIngredientRecipeMatch.map(({ recipe: { name } }) => name)}
        </TextLoop>
      </h1>
      <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
        Turn your random groceries into delicious meals. See what's in your
        pantry, reduce food waste, and discover your next favorite dish.
      </p>
      <div className="flex flex-row gap-3">
        <Button size="lg" className="gap-4">
          Download the App now! <Download className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
