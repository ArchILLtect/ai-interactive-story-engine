import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Interactive Story Engine",
  description: "AI-powered interactive story game engine with branching narratives and meaningful choices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
