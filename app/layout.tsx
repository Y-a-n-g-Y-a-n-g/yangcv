import "./globals.css";
import { Source_Serif_4, Source_Sans_3 } from "next/font/google";

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap"
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
