import type { Metadata } from "next";
import { helveticaNeue } from "@/app/ui/fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={helveticaNeue.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
