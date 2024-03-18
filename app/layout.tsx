import { Navbar } from "@/components/navbar";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata } from "next";
import { Providers } from "./providers";
import { useState } from "react";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  
  return (
    <html lang="en" className={`${fontSans.className} scroll-smooth`} suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-max min-w-full bg-background font-sans antialiased no-scrollbar",
          fontSans.className
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <Navbar />
          <div id="home" className="relative flex flex-col h-screen w-max  mx-auto ">
            <main className="relative container pt-16 px-6 flex-shrink ">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
