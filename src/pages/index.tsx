import Head from "next/head";
import { Rubik } from "next/font/google";

const rubikSans = Rubik({
  variable: "--font-rubik-sans",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>הלקוחות שלך יגידו: זה בדיוק מה שחיפשתי</title>
        <meta
          name="description"
          content="אפיון, עיצוב ופיתוח אתרים לעסקים שמבינים שאתר צריך לעבוד למשוך לקוחות, לבדל מהמתחרים, ולספר את הסיפור הנכון."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <div className={` ${rubikSans.variable} `}>
        <main>
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </main>
      </div>
    </>
  );
}
