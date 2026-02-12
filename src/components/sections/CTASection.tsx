import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Users, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-primary to-primary/80">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
            Ready to Transform Your Kitchen?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Join thousands of home cooks who've revolutionized their cooking
            experience with DoneDish.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-4 group"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Learn More
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-primary-foreground/70 text-sm">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>50,000+ Users</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              <span>99% Satisfaction</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
