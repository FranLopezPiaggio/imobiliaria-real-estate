import type { Metadata } from "next";
import { Ovo, Mulish } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import "./globals.css";

const ovo = Ovo({
  variable: "--font-ovo",
  subsets: ["latin"],
  weight: "400",
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Imobiliária Portugal | Arrendamento e Compra de Imóveis",
  description:
    "Encontre o seu próximo imóvel em Portugal. Arrendamento, compra e temporário. Lisboa, Porto e muito mais.",
  keywords: [
    "imobiliária",
    "arrendamento",
    "compra",
    "imóveis",
    "Portugal",
    "casa",
    "apartamento",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body
        className={`${ovo.variable} ${mulish.variable} font-sans antialiased bg-white text-dark-gray`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
