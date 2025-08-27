"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "./navbar/page";
import { NotesProvider } from "../context/NotesContext";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <html lang="en">
          {" "}
          <body className={`${geistSans.variable} ${geistMono.variable} `}>
            <Navbar />
            <NotesProvider>{children}</NotesProvider>
          </body>
        </html>
      </ThemeProvider>
    </ClerkProvider>
  );
}
