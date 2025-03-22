/* eslint-disable import/first */
"use client";

/* headタグ設定 */
import Head from "next/head";

// import { siteMeta } from "@/lib/constants";
// const { siteTitle, siteDesc, siteUrl, siteIcon } = siteMeta;

const siteMeta = {
  siteTitle: "美容室チャイム",
  siteDesc: "美容室チャイムは、最新の技術と心温まるサービスであなたの魅力を最大限に引き出します。",
  siteUrl: "http://test",
  siteLang: "ja",
  siteLocale: "ja_jp",
  siteType: "website",
  siteIcon: "/favicon.ico",
};

import { useSearchParams } from "next/navigation";

const Meta = ({ pageTitle, pageDesc }) => {
  // ページタイトル
  const title = pageTitle ? `${pageTitle} | ${siteMeta.siteTitle}` : siteMeta.siteTitle;

  // ページの説明
  const desc = pageDesc ?? siteMeta.siteDesc;

  // ページのURL
  const router = useSearchParams();
  const url = `${siteMeta.siteUrl}${router}`;

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />

      <meta name="description" content={desc} />
      <meta property="og:description" content={desc} />

      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />

      <link rel="icon" href={siteMeta.siteIcon} />
      <link rel="apple-touch-icon" href={siteMeta.siteIcon} />
    </Head>
  );
};

export default Meta;
