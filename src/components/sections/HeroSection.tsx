import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { ChefHat, Sparkles, ArrowRight } from "lucide-react";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useRef, useState, useEffect } from "react";

interface BackgroundElement {
  id: number;
  width: number;
  height: number;
  left: string;
  top: string;
  duration: number;
  delay: number;
}

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [backgroundElements, setBackgroundElements] = useState<
    BackgroundElement[]
  >([]);
  const [isMounted, setIsMounted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    // Generate random values on client side only to avoid hydration issues
    const elements = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      width: Math.random() * 300 + 100,
      height: Math.random() * 300 + 100,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }));

    setBackgroundElements(elements);
    setIsMounted(true);
  }, []);

  return (
    <motion.section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-primary/10"
      style={{ y, opacity }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {isMounted &&
          backgroundElements.map((element) => (
            <motion.div
              key={element.id}
              className="absolute rounded-full bg-primary/10"
              style={{
                width: element.width,
                height: element.height,
                left: element.left,
                top: element.top,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: element.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: element.delay,
              }}
            />
          ))}
      </div>

      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-20">
        <ModeToggle />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-3xl mb-6 shadow-2xl">
            <ChefHat className="w-10 h-10 text-primary-foreground" />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Powered by AI</span>
            <Sparkles className="w-4 h-4 text-primary" />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-6xl md:text-8xl font-display font-bold text-foreground mb-6 leading-tight"
        >
          <span className="block">Cook</span>
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            kit
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Transform your kitchen with AI-powered pantry management and
          personalized recipe discovery. Never waste food again.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button size="lg" className="text-lg px-8 py-4 group">
            Start Your Journey
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4">
            Watch Demo
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-xs text-muted-foreground"
        >
          Trusted by home cooks worldwide
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-muted-foreground/30 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
