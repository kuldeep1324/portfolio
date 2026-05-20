import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kuldeep — Creative Developer",
  description:
    "Premium portfolio of Kuldeep — creative developer and designer crafting exceptional digital experiences.",
  openGraph: {
    title: "Kuldeep — Creative Developer",
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
