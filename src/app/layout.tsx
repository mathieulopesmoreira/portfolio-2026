import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Mathieu Lopes Moreira — Data Science & Self-Hosting",
  description: "Portfolio de Mathieu Lopes Moreira. Étudiant en Science des Données, passionné de cuisine et de self-hosting.",
  keywords: ["data science", "portfolio", "Mathieu Lopes Moreira", "BUT SD", "self-hosting"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <body className="antialiased grain">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
