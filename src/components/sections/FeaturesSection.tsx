import React from "react";
import { motion } from "motion/react";
import { Camera, Sparkles, Shield, CalendarDays } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function FeaturesSection() {
  const features = [
    {
      icon: Camera,
      title: "Smart Pantry Scanning",
      description:
        "Instantly catalog your ingredients with AI-powered image recognition and automatic expiration tracking.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Sparkles,
      title: "AI Recipe Matching",
      description:
        "Get personalized recipe recommendations based on what's actually in your pantry right now.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Waste Prevention",
      description:
        "Smart notifications and meal planning to ensure nothing expires before you use it.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: CalendarDays,
      title: "Meal Planning",
      description:
        "Plan your week with intelligent suggestions that optimize ingredient usage and reduce waste.",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Why Choose DoneDish?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The only kitchen companion you'll ever need, powered by cutting-edge
            AI technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full border-0 bg-background/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
