import React from "react";
import { motion } from "motion/react";
import { Sparkles, ChefHat, Clock, Star, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RecipeSection() {
  const recipes = [
    { name: "Banana Smoothie", time: "5m", difficulty: 1, match: 95 },
    { name: "Chicken Salad", time: "15m", difficulty: 2, match: 80 },
    { name: "Milk Pancakes", time: "20m", difficulty: 3, match: 90 },
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="relative bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-2xl shadow-2xl p-6 border">
              <div className="mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">
                  AI Recommendations
                </h3>
              </div>

              <div className="space-y-4">
                {recipes.map((recipe, index) => (
                  <motion.div
                    key={recipe.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-lg bg-background/80 backdrop-blur-sm hover:bg-background transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                        <ChefHat className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {recipe.name}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>{recipe.time}</span>
                          <div className="flex items-center gap-1">
                            {[...Array(recipe.difficulty)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-3 h-3 fill-current text-yellow-500"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-primary">
                        {recipe.match}% match
                      </div>
                      <div className="text-xs text-muted-foreground">
                        with your pantry
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-lg shadow-lg text-sm font-medium"
            >
              ✨ 95% ingredient match
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              <span className="text-primary">AI-Powered</span> Recipe Discovery
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Get personalized recipe suggestions that perfectly match your
              available ingredients. Never wonder "what can I cook?" again.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "🤖 Smart ingredient matching algorithm",
                "🍽️ Personalized dietary preferences",
                "⏱️ Filter by cooking time and difficulty",
                "💝 Save favorites and create meal plans",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center text-foreground"
                >
                  <span className="text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Button size="lg" variant="outline" className="group">
              Explore Recipes
              <Search className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
