import type { Metadata } from "next";
import { Bowlby_One, Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import NavBar from "@/components/NavBar";

const bowlbyOne = Bowlby_One({
  variable: "--font-bowlby-one",
  subsets: ["latin"],
  weight: "400",
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DoneDish - AI-Powered Recipe Generator",
  description: "Scan Ingredients & Get Recipes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${bowlbyOne.variable} ${urbanist.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
