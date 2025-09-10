import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AOSProvider from "./AOSProvider";

const ivyMode = localFont({
  src: [
    { path: "../public/fonts/IvyMode-Thin.woff2", weight: "100", style: "normal" },
    { path: "../public/fonts/IvyMode-Light.woff2", weight: "300", style: "normal" },
    { path: "../public/fonts/IvyMode-LightItalic.woff2", weight: "300", style: "italic" },
    { path: "../public/fonts/IvyMode-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/IvyMode-Italic.woff2", weight: "400", style: "italic" },
    { path: "../public/fonts/IvyMode-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/IvyMode-Bold.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/IvyMode-BoldItalic.woff2", weight: "700", style: "italic" },
  ],
  variable: "--font-ivymode",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Family House",
  description: "Site Develop By © 2025 Family House",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-arp="">
      <body className={`${ivyMode.variable} font-work-sans antialiased`}>
        {/* ✅ Wrap all children with AOSProvider */}
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}
