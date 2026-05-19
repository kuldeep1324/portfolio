import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aryan Mehta — Creative Developer",
  description:
    "Premium portfolio of Aryan Mehta — creative developer and designer crafting exceptional digital experiences.",
  openGraph: {
    title: "Aryan Mehta — Creative Developer",
    description:
      "Crafting digital experiences that blur the line between art and technology.",
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
      <body>{children}</body>
    </html>
  );
}
