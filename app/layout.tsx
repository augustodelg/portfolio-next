import { Navbar } from "@/components/Navbar";
import Typography from "@/components/Typography";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata } from "next";
import Link from "next/link";
import { Providers } from "./providers";

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
      lang="es"
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
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div id="home" className=" h-full w-full  ">
            <Navbar />
            <main className="relative flex flex-col  mx-auto ">
              {children}
            </main>
          </div>
        </Providers>
      <footer>
        <div className="mb-10 mx-auto flex flex-col align-middle justify-center text-center">
          <Typography.Body className="text-small text-gray-500">
            Designed and developed by Taca 👨‍💻
          </Typography.Body>
          <Link href={"https://github.com/augustodelg/portfolio-next"} target="_blank" className="text-gray-500">
            Version 0.0.2
          </Link>
        </div>
      </footer>
      </body>
    </html>
  );
}
