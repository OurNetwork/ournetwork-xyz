import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import { SearchProvider } from "@/context/SearchContext";

import { siteMetadata } from "@/constants";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibmSans",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibmMono",
});

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  metadataBase: new URL(siteMetadata.baseUrl),
  openGraph: {
    type: "website",
    url: siteMetadata.baseUrl,
    title: siteMetadata.title,
    description: siteMetadata.description,
    siteName: siteMetadata.name,
    images: [`${siteMetadata.baseUrl}/assets/og.jpg`],
  },
  twitter: { card: "summary_large_image", title: siteMetadata.title, description: siteMetadata.description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${ibmPlexMono.variable} ${ibmPlexSans.variable}`}>
        <ThemeProvider>
          <SearchProvider>{children}</SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
