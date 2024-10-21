import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import localFont from "next/font/local";
import UnderConstruction from "@/components/under-construction";

const myFont = localFont({
  src: "../assets/fonts/Proxima_Nova_Font.otf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Myrkle",
  description: "Myrkle: Your gateway to a decentralized world",
  keywords: [
    "myrkle",
    "token",
    "nft",
    "asset",
    "crossmark",
    "gemwallet",
    "xumm",
    "xaman",
    "mint",
    "engine",
    "blockchain",
    "xrp",
    "ripple",
    "wallet",
    "crypto",
    "ledger",
  ],
  robots: {
    index: true, // Ensuring the page is indexed
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true, // Optional based on your content strategy
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Providers>
          <div className="app">{children}</div>
          <div className="under-construction">
            <UnderConstruction />
          </div>
        </Providers>
      </body>
    </html>
  );
}
