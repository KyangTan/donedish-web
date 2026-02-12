import React from "react";
import { motion } from "motion/react";
import {
  ChefHat,
  Mail,
  MapPin,
  Twitter,
  Instagram,
  Github,
} from "lucide-react";
import Link from "next/link";

export default function FooterSection() {
  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pantry Management", href: "#pantry" },
      { name: "AI Recipes", href: "#recipes" },
      { name: "Pricing", href: "#pricing" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Blog", href: "#blog" },
      { name: "Careers", href: "#careers" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [
      { name: "Terms & Conditions", href: "/terms-and-conditions" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "Data Protection", href: "#data" },
    ],
    support: [
      { name: "Help Center", href: "#help" },
      { name: "Community", href: "#community" },
      { name: "API Documentation", href: "#api" },
      { name: "Status", href: "#status" },
    ],
  };

  return (
    <footer className="bg-foreground text-background py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center">
                  <ChefHat className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-2xl font-display font-bold">DoneDish</span>
              </div>

              <p className="text-background/70 mb-6 leading-relaxed">
                Transform your kitchen with AI-powered pantry management and
                personalized recipe discovery. Cook smarter, waste less, enjoy
                more.
              </p>

              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("/") ? (
                    <Link
                      href={link.href}
                      className="text-background/70 hover:text-background transition-colors"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-background transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-background/20 pt-8 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-background/70" />
              <span className="text-background/70">fridgit132@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-background/70" />
              <span className="text-background/70">San Francisco, CA</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-background/50 text-sm">
            © 2024 DoneDish. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0 text-sm">
            <Link
              href="/terms-and-conditions"
              className="text-background/50 hover:text-background transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy-policy"
              className="text-background/50 hover:text-background transition-colors"
            >
              Privacy
            </Link>
            <a
              href="#cookies"
              className="text-background/50 hover:text-background transition-colors"
            >
              Cookies
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
