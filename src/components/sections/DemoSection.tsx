import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DemoSection() {
  const pantryItems = [
    { name: "Milk", expiry: "2 days", category: "Dairy", urgency: "high" },
    {
      name: "Bananas",
      expiry: "5 days",
      category: "Fruits",
      urgency: "medium",
    },
    { name: "Chicken", expiry: "1 day", category: "Meat", urgency: "critical" },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-primary/5 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Your Pantry,
              <span className="text-primary"> Organized</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Visual inventory management with smart expiration tracking. Know
              exactly what you have and when to use it.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "📱 Scan items with your camera",
                "📅 Automatic expiration tracking",
                "🔔 Smart notifications before items expire",
                "📊 Usage analytics and insights",
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

            <Button size="lg" className="group">
              Try Pantry Demo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-background rounded-2xl shadow-2xl p-6 border">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  My Pantry
                </h3>
                <p className="text-sm text-muted-foreground">
                  3 items expiring soon
                </p>
              </div>

              <div className="space-y-4">
                {pantryItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          item.urgency === "critical"
                            ? "bg-red-500"
                            : item.urgency === "high"
                            ? "bg-orange-500"
                            : "bg-yellow-500"
                        }`}
                      />
                      <div>
                        <p className="font-medium text-foreground">
                          {item.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {item.category}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {item.expiry}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-3 rounded-lg shadow-lg text-sm font-medium"
            >
              🔔 3 items expire today
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
