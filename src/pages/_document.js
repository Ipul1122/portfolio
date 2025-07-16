import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Portofolio Muhammad Syaifulloh" />
        <meta property="og:description" content="Mahasiswa Informatika yang membangun website Laravel, React, dan Tailwind CSS" />
        <meta property="og:image" content="https://portfolio-muhammad.vercel.app/preview.jpg" />
        <meta property="og:url" content="https://portfolio-muhammad.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Portofolio Syaiful" />

        {/* Twitter Card Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portofolio Muhammad Syaifulloh" />
        <meta name="twitter:description" content="Mahasiswa Informatika yang membangun website Laravel, React, dan Tailwind CSS" />
        <meta name="twitter:image" content="https://portfolio-muhammad.vercel.app/preview.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
