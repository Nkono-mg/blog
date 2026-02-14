import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/components/ui/provider";

export const metadata: Metadata = {
  title: "Gestion de contenu",
  description: "Un système de gestion de contenu éditoriaux avec back-office",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
