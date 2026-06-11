// app/layout.tsx
// Root layout - wraps every page
// Sets up the dark background and base font

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  // Only load the weights we actually use
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "LearnFlow | Student Dashboard",
  description: "Your personalized learning dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-bg-base text-text-primary antialiased`}>
        {children}
      </body>
    </html>
  );
}
