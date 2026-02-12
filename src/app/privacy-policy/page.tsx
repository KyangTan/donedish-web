import React from "react";
import { ArrowLeft, Calendar, Eye, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const sections = [
  {
    title: "Last updated: February 10, 2025",
    content: `DoneDish ("we", "our", or "the App") is a privacy-first recipe and pantry management application designed for personal use. We are committed to protecting your privacy and being transparent about our data practices.

This Privacy Policy outlines how we process your information in compliance with applicable data protection laws, including the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and relevant local privacy frameworks.`,
  },
  {
    title: "What Information We Collect and Why",
    content: `DoneDish is built to minimize data collection while providing personalized recipe recommendations and pantry management features.

We collect only the information necessary to provide our core services:`,
  },
  {
    title: "a. Recipe and Pantry Data",
    content: `Purpose: To provide personalized recipe recommendations and track your pantry inventory.

Data Use: Your ingredients, dietary preferences, and recipe history are used to generate AI-powered meal suggestions and manage expiration tracking.

Storage: Data is stored locally on your device and optionally synced to your personal cloud storage (iCloud/Google Drive) for cross-device access.`,
  },
  {
    title: "b. AI-Powered Recipe Recommendations",
    content: `Service Providers: OpenAI GPT API and similar AI services

Purpose: To analyze your pantry contents and generate personalized recipe suggestions.

Data Flow: Your ingredient lists and dietary preferences are securely transmitted over TLS-encrypted connections to AI providers for recipe generation; results are returned immediately to DoneDish.

Data Retention: DoneDish does not store your requests on external servers. AI providers retain request data for up to 30 days solely for abuse-monitoring and safety auditing, after which it is deleted. Your data is not used to train their models.`,
  },
  {
    title: "c. Camera Access (Optional)",
    content: `Purpose: To allow you to scan ingredient labels and add items to your pantry quickly.

Data Use: Images are processed locally on your device for text recognition and are not saved or uploaded to any server.

Storage: No local or remote retention of camera images.`,
  },
  {
    title: "d. Cloud Sync (Optional)",
    content: `Purpose: To optionally sync your pantry data and recipe preferences across your devices.

Data Control: Data is stored only in your personal cloud account (iCloud, Google Drive), governed by their respective privacy terms.

Access: We do not have access to, nor do we control, any cloud-stored data.`,
  },
  {
    title: "What We Do Not Collect",
    content: `We do not collect or process:

• Your name, email address, phone number, or address (unless you voluntarily provide it for support)
• Your device's unique ID (IDFA, IMEI, etc.)
• Your contact list, calendar, or SMS history
• Your behavioral usage logs beyond basic app functionality
• Your precise or coarse location data
• Any personally identifiable information from recipe searches`,
  },
  {
    title: "Legal Basis for Processing",
    content: `For users located in the European Union or regions covered by the GDPR, our legal basis for processing is your explicit consent when granting system-level permissions (camera, cloud storage, etc.).

For users in California (CCPA), we affirm:
• We do not "sell" or "share" your data with any third party
• You are entitled to request information, opt out of any future data sharing, and request deletion of any stored data

For users in China, we do not collect or process personal information subject to localization or cross-border transfer restrictions.`,
  },
  {
    title: "Data Security",
    content: `Even though we minimize data collection, we implement industry-standard practices:

• End-to-end encrypted connections for AI API requests
• Local data encryption on your device
• No use of cookies, fingerprinting, or analytics SDKs beyond essential app functionality
• All data flows either remain on-device or pass through secure, vetted channels`,
  },
  {
    title: "Your Rights",
    content: `Depending on your location, you may have the following rights:

• Access: You may request confirmation of what data we process (most data remains on your device)
• Correction/Deletion: All data you create is controlled via your device or cloud settings
• Consent Withdrawal: You may revoke camera, cloud access, or AI features anytime through app settings
• Complaint: You may contact your regional data authority, or contact us directly for prompt resolution

We are committed to respecting your privacy rights globally.`,
  },
  {
    title: "Children's Privacy",
    content: `DoneDish is designed to be safe and appropriate for users aged 13 and above. We do not knowingly collect personal data from children under 13. The app contains minimal data collection, no behavioral tracking, and focuses on local data storage.

If you are a parent or guardian and believe that your child has inadvertently shared any personal information while using DoneDish, please contact us at fridgit132@gmail.com. We will investigate and address any such concerns immediately.`,
  },
  {
    title: "Policy Updates",
    content: `We may revise this Privacy Policy to reflect changes in functionality, law, or regulatory guidance. We will notify you of significant updates via in-app notices. Continued use of the app after an update constitutes acceptance of the revised terms.`,
  },
  {
    title: "Contact Us",
    content: `If you have any questions, concerns, or data-related requests, please contact:

📧 Email: fridgit132@gmail.com

We respond to all requests within 15 business days.`,
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="mt-16 py-16 px-6 bg-gradient-to-br from-background via-background to-blue-500/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-2xl mb-6">
            <Eye className="w-8 h-8 text-blue-500" />
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Privacy Policy
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're committed to protecting your privacy and being transparent
            about how we handle your data.
          </p>

          <div className="flex flex-wrap gap-6 justify-center items-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Last updated: February 10, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              <span>GDPR & CCPA Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-500/5 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Privacy-First Approach
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              At DoneDish, we believe privacy is a fundamental right. This
              Privacy Policy explains how we handle your information when you
              use our smart recipe and pantry management services. We minimize
              data collection and keep most of your data locally on your device,
              giving you complete control over your information.
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

          {/* Contact Section */}

          <div className="bg-secondary/20 p-8 rounded-lg mt-16 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Questions About Your Privacy?
            </h3>
            <p className="text-muted-foreground mb-6">
              We're here to help. If you have any questions about how we handle
              your data, please reach out to us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline">Contact Support</Button>
              <Button asChild>
                <Link href="/terms-and-conditions">View Terms of Use</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
