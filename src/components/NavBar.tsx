"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import Logo from "@/images/logo-filled.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      initial={{ y: 0 }}
      animate={{
        backgroundColor: isScrolled
          ? "rgba(255, 255, 255, 0.95)"
          : "rgba(255, 255, 255, 0)",
        backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
        borderBottom: isScrolled
          ? "1px solid rgba(229, 231, 235, 0.3)"
          : "1px solid transparent",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        animate={{
          paddingTop: isScrolled ? "0.75rem" : "1.5rem",
          paddingBottom: isScrolled ? "0.75rem" : "1.5rem",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <motion.div
            className="flex items-center cursor-pointer"
            animate={{
              scale: isScrolled ? 0.9 : 1,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={() => router.push("/")}
          >
            <Image
              src={Logo}
              alt="DoneDish Logo"
              className="w-8 h-8 mr-2 rounded-sm"
            />
            <h1 className="text-xl tracking-wide font-bowlby-one font-bold text-foreground/80">
              DoneDish
            </h1>
          </motion.div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => router.push("/contact")}
              className="hidden sm:flex"
            >
              Contact
            </Button>
            <Button variant="default" className="bg-primary">
              Download App Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
