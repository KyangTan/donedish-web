import React from "react";
import { ArrowLeft, Calendar, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const sections = [
  {
    title: "Last updated: February 10, 2025",
    content: `Welcome to DoneDish. These Terms of Use ("Agreement") constitute a legally binding agreement between you ("you" or "the user") and the provider of the DoneDish application ("we" or "us"). Please read this Agreement carefully before using the DoneDish app ("the App").

By using the App, you acknowledge that you have read, understood, and agree to be bound by this Agreement.`,
  },
  {
    title: "Description of Service",
    content: `DoneDish is a smart recipe and pantry management tool that helps users discover recipes, track ingredients, and manage their kitchen inventory. The App provides recipe recommendations, pantry tracking, and cooking guidance powered by AI technology and third-party integrations.`,
  },
  {
    title: "User Conduct",
    content: `When using the App, you agree not to:

• Violate any laws or public decency standards
• Upload, share, or process any illegal, offensive, or infringing content
• Attempt to reverse-engineer, tamper with, or disrupt the App
• Use the App for unauthorized commercial purposes
• Conduct any operation that may compromise App security or user experience

We reserve the right to restrict access or terminate usage in case of violations, without liability.`,
  },
  {
    title: "Intellectual Property",
    content: `All designs, illustrations, animations, content, branding, and technical logic within the App are owned by us or licensed to us. You may not copy, modify, distribute, or use any part of the App for commercial purposes without our written consent.`,
  },
  {
    title: "Privacy Protection",
    content: `Your privacy matters to us. DoneDish collects minimal data necessary for app functionality and never sells your personal information.

Recipe data, pantry information, and preferences may be stored locally on your device and synced across your devices for convenience. When you use AI-powered features, recipe requests may be processed through secure third-party services for recommendations.

For full details, please see our Privacy Policy.`,
  },
  {
    title: "Recipe and Food Safety Disclaimer",
    content: `DoneDish provides recipe recommendations and cooking guidance for informational purposes only. While we strive for accuracy:

• Users are responsible for verifying ingredient safety, dietary restrictions, and food allergies
• Pantry expiration tracking is a convenience tool - users remain solely responsible for food safety decisions
• We cannot guarantee 100% accuracy in recipe suggestions, nutritional calculations, or ingredient matching
• Users should exercise their own judgment when following recommendations

DoneDish is not liable for any health issues resulting from food consumption based on our recommendations or tracking systems.`,
  },
  {
    title: "Service Suspension and Changes",
    content: `We reserve the right to suspend, discontinue, or modify any part of the App for reasons including maintenance, legal compliance, or technical needs. Notifications may be provided within the App where appropriate.`,
  },
  {
    title: "Disclaimer",
    content: `To the extent permitted by law, we are not liable for:

• Recipe recommendation inaccuracies or nutritional calculation errors
• Third-party service outages or force majeure events
• Functional issues caused by your own device settings or hardware limitations
• Food safety issues resulting from user decisions based on app guidance`,
  },
  {
    title: "Governing Law and Dispute Resolution",
    content: `This Agreement shall be governed by the laws of your country or region of residence. In the event of a dispute, you agree to first attempt resolution through negotiation. If negotiation fails, the matter may be submitted to the competent court in your jurisdiction.`,
  },
  {
    title: "Updates to This Agreement",
    content: `We may update this Agreement as required by law or as functionality evolves. Any changes will be announced within the App. Continued use of the App after updates constitutes your acceptance of the revised terms.`,
  },
  {
    title: "Contact Us",
    content: `If you have any questions, concerns, or data-related requests, please contact:

📧 Email: fridgit132@gmail.com

We respond to all requests within 15 business days.`,
  },
];

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="mt-16 py-16 px-4 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Terms of Use
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Please read these terms of use carefully before using DoneDish's
            services.
          </p>

          <div className="flex flex-wrap gap-6 justify-center items-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Last updated: February 10, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Applies to all DoneDish users</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/5 mb-12 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Important Notice
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Use ("Terms") govern your use of DoneDish's smart
              recipe and pantry management application. By using our service,
              you agree to these terms in full. Please read them carefully and
              contact us if you have any questions.
            </p>
          </div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <div
                key={section.title}
                className="p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {section.title}
                </h3>
                <div className="prose prose-gray max-w-none">
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-secondary/20 mt-16 text-center p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Questions About These Terms?
            </h3>
            <p className="text-muted-foreground mb-6">
              If you have any questions about these Terms of Use, please don't
              hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline">Contact Support</Button>
              <Button asChild>
                <Link href="/privacy-policy">View Privacy Policy</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
