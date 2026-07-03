import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Top 20 Asian Restaurants in Boston",
  description:
    "A spice-market themed guide to Asian restaurants in Boston, grouped by cuisine.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
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
