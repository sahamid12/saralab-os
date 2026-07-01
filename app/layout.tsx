import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SaraLab OS",
  description: "A browser-based learning operating system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}