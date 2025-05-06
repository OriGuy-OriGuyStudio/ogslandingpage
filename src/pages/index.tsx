import Head from "next/head";
import { Rubik } from "next/font/google";
import HeroSection from "@/sections/HeroSection/HeroSection";
import { gsap } from "gsap";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";

const rubikSans = Rubik({
  variable: "--font-rubik-sans",
  subsets: ["latin"],
});

export default function Home() {
  gsap.registerPlugin(Physics2DPlugin);

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
          content="width=device-width, initial-scale=1 viewport-fit=cover"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <div className={` ${rubikSans.variable} `}>
        <main className="">
          <HeroSection />
          {/* <div className="w-screen h-screen bg-colorBrandPink500dark"></div> */}
        </main>
      </div>
    </>
  );
}
