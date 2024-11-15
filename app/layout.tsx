import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Load custom Geist fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Define metadata
export const metadata: Metadata = {
  title: 'Developer Portfolio',
  description: 'Professional portfolio showcasing my projects and skills',
};

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-gray-900`}
      >
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}