import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chat app",
  description: "Chat app with Next.js and WebSockets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
