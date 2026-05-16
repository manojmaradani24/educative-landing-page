import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Educate.ai - AI-Powered Learning Platform",
  description: "Transform your learning journey with personalized AI education, interactive courses, and global community",
  keywords: "AI learning, online education, personalized learning, tech courses",
  authors: [{ name: "Educate.ai" }],
  openGraph: {
    title: "Educate.ai - AI-Powered Learning Platform",
    description: "Transform your learning journey with AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}