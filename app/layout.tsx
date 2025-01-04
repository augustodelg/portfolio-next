import { Navbar } from "@/components/Navbar";
import Typography from "@/components/Typography";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata } from "next";
import Link from "next/link";
import { Providers } from "./providers";
import packageJson from "../package.json";
import Footer from "@/components/Footer";


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
    <html
      lang="en"
      className={`${fontSans.className} scroll-smooth`}
      suppressHydrationWarning
    >
      <head />
      <body
        className={clsx(
          "min-h-full min-w-full bg-background font-sans antialiased no-scrollbar",
          fontSans.className
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div id="home" className="h-full w-full">
            <Navbar />
            <main className="relative flex flex-col mx-auto ">{children}</main>
          </div>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
