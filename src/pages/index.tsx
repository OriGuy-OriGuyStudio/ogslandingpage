import Head from "next/head";
import { Rubik } from "next/font/google";
import HeroSection from "@/sections/HeroSection/HeroSection";
import { gsap } from "gsap";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import PainSection from "@/sections/painSection/PainSection";
import ProblemSection from "@/sections/ProblemSection/ProblemSection";
import LetsDoItSection from "@/sections/LetsDoItSection/LetsDoItSection";
import WhyMeSection from "@/sections/WhyMeSection/WhyMeSection";
import ContactMe from "@/sections/ContactMe/ContactMe";

const rubikSans = Rubik({
  variable: "--font-rubik-sans",
  subsets: ["latin"],
});

export default function Home() {
  useEffect(() => {
    // Register GSAP plugins only on the client side
    gsap.registerPlugin(Physics2DPlugin, ScrollSmoother, ScrollTrigger);

    // Create the ScrollSmoother instance
    let smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      smoothTouch: 2,
    });

    // Clean up on component unmount
    return () => {
      if (smoother) smoother.kill();
    };
  }, []);

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
      <div
        id="smooth-wrapper"
        className={` ${rubikSans.variable} `}
      >
        <main
          id="smooth-content"
          className=""
        >
          <HeroSection />
          <PainSection />
          <ProblemSection />
          <LetsDoItSection />
          <WhyMeSection />
          <ContactMe />
        </main>
      </div>
    </>
  );
}
