import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dream World Portfolio",
  description: "An immersive dreamlike personal portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
