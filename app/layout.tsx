import React from "react";
import type { Metadata } from "next";

/* components */
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTop from "@/components/PageTop";

/* css */
import "@/css/global.css";

export const metadata: Metadata = {
  title: {
    template: "%s | 美容室チャイム",
  },
  description: "美容室チャイムは、最新の技術と心温まるサービスであなたの魅力を最大限に引き出します。",
  openGraph: {
    title: "美容室チャイム",
    description: "美容室チャイムは、最新の技術と心温まるサービスであなたの魅力を最大限に引き出します。",
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="jp">
      <body>
        <Header />
        <main>{children}</main>
        <PageTop />
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
