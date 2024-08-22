"use client";
import { defineChain } from "viem";
import { Outfit } from "next/font/google";
import "./globals.css";

import { PrivyProvider } from "@privy-io/react-auth";
const font = Outfit({ subsets: ["latin"] });

const BitTorrent = defineChain({
  id: 1029,
  name: "BitTorrent Chain Donau",
  network: "BitTorrent Chain Donau",
  nativeCurrency: {
    decimals: 18,
    name: "BitTorrent Chain Donau",
    symbol: "BTTC",
  },
  rpcUrls: {
    default: {
      http: ["https://pre-rpc.bt.io/"],
    },
  } as any,
  blockExplorers: {
    default: { name: "Explorer", url: "https://testscan.bt.io" },
  },
}) as any;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <PrivyProvider
          appId="cm03josri02xpwlateoa3sw64"
          config={{
            appearance: {
              theme: "light",
              accentColor: "#676FFF",
              logo: "https://asset.cloudinary.com/dklv0c2br/4804ec77c8b78138c9fcdf6dac816110",
            },
            embeddedWallets: {
              createOnLogin: "users-without-wallets",
            },
            defaultChain: BitTorrent,
            supportedChains: [BitTorrent],
          }}
        >
          {children}
        </PrivyProvider>
      </body>
    </html>
  );
}
