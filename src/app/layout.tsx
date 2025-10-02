import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/components/providers/QueryProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Habibis-Finances",
  description: "Aplicacion de finanzas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0d0d1d] sm:flex sm:items-center sm:justify-center sm:min-h-screen`}
      >
        <main className="w-full min-h-screen bg-[#181835] text-white flex flex-col sm:max-w-sm sm:h-[90h] sm:max-h-[800px] sm:min-h-0 sm:rounded-2xl sm:shadow-xl sm:overflow-y-auto relative">
          <QueryProvider>
            {children}
          </QueryProvider>
        </main>
      </body>
    </html>
  );
}
