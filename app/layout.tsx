import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PERFUME FIELD",
  description: "Field recorder for the senses. Engineered to capture the ephemeral.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,300,400&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-background">
        {children}
      </body>
    </html>
  );
}
