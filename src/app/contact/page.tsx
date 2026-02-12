"use client";

import React from "react";
import { Mail, MessageSquare, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "motion/react";

export default function ContactPage() {
  const handleEmailClick = () => {
    window.location.href = "mailto:fridgit132@gmail.com";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="mt-16 py-16 px-6 bg-gradient-to-br from-background via-background to-green-500/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-2xl mb-6">
              <Mail className="w-8 h-8 text-green-500" />
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Get in Touch
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have a question, suggestion, or just want to say hi? We'd love to
              hear from you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Email Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 md:p-12 bg-gradient-to-br from-green-500/5 to-blue-500/5 border-green-500/20">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-green-500/10 rounded-xl mb-4">
                  <Send className="w-7 h-7 text-green-500" />
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  Send us an Email
                </h2>

                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Click the button below to open your default email client and
                  compose a message to our team. We'll get back to you as soon
                  as possible!
                </p>

                <Button
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-6 text-lg"
                  onClick={handleEmailClick}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email fridgit132@gmail.com
                </Button>

                <p className="text-sm text-muted-foreground mt-4">
                  Or copy our email:{" "}
                  <span className="font-mono text-foreground">
                    fridgit132@gmail.com
                  </span>
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Additional Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="p-6 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-xl mb-4">
                    <MessageSquare className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    General Inquiries
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Questions about features, partnerships, or general
                    information about DoneDish.
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="p-6 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/10 rounded-xl mb-4">
                    <Clock className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Response Time
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We typically respond to all inquiries within 15 business
                    days or sooner.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12"
          >
            <Card className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Common Topics
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">
                      Technical Support
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Issues with app functionality, syncing, or features
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">
                      Privacy & Data
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Questions about data handling, privacy, and security
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">
                      Feature Requests
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Suggestions for new features or improvements
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">
                      Partnerships
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Business inquiries and collaboration opportunities
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

