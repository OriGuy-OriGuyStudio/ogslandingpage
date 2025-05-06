import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="he"
      dir="rtl"
      className=""
    >
      <Head />
      <body className=" bg-colorBrandGray800dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
