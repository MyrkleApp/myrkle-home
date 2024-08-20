import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Myrkle",
  description: "Myrkle: Your gateway to a decentralized world",
  keywords: ["myrkle", "token", "nft", "asset", "crossmark", "gemwallet", "xumm", "xaman", "mint", "engine", "blockchain", "xrp", "ripple", "wallet", "crypto", "ledger"],
  robots: {
    index: true,  // Ensuring the page is indexed
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,  // Optional based on your content strategy
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
