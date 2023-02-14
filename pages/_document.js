import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/flowbite@1.6.0/dist/flowbite.min.css"
        />
      </Head>
      <body className="bg-[#000] bodys">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
