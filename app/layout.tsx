import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VC Eletricar",
  description:
    "Ajudamos na compra e venda de carros elétricos com o foco na Inovação e Sustentabilidade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
        <link rel="icon" href="/favicon2.png" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={
            "VC Eletricar | Carros Elétricos com o foco na Inovação e Sustentabilidade"
          }
        />
        <meta
          property="og:description"
          content={"Carros Elétricos com o foco na Inovação e Sustentabilidade"}
        />
        <meta property="og:image" content={"/favicon2.png"} />
        <meta property="og:url" content={"https://www.vceletricar.pt/"} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={
            "VC Eletricar | Carros Elétricos com o foco na Inovação e Sustentabilidade"
          }
        />
        <meta
          name="twitter:description"
          content={"Carros Elétricos com o foco na Inovação e Sustentabilidade"}
        />
        <meta name="twitter:image" content={"/favicon2.png"} />
        <meta property="twitter:url" content={"https://www.vceletricar.pt/"} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
