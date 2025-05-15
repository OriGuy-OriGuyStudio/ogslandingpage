"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import BlurBGColors from "@/components/Hero/BlurBGColors";
import Image from "next/image";

function HeroSection() {
  useGSAP(() => {
    gsap.fromTo(
      ".titleToStagger",
      {
        opacity: 0,
        scaleZ: 0,
        y: 100,
        duration: 1,
        repeat: 0,
        // ease: "bounce.out",
      },
      {
        opacity: 1,
        scaleZ: 1,
        y: 0,
        duration: 1.25,
        ease: "expo.in",
        stagger: {
          each: 0.25,
        },
      }
    );
  });

  return (
    <section className="  relative overflow-x-hidden   h-svh text-colorBrandWhiteYellow100light bg-colorBrandPurple900dark flex flex-col md:items-center justify-center px-4 md:px-20 ">
      <Image
        src={"/fullLogoWhiteSVG.svg"}
        alt={"logo"}
        width={48}
        height={48}
        className="z-10 absolute top-10"
      />
      <BlurBGColors />

      <p className=" titleToStagger  z-10 font-black text-right text-textsizebrandh6">
        לאתר שלך יש תפקיד אחד:
      </p>
      <h1
        style={{ textShadow: "1px 4px 8px #2a2a2a" }}
        className=" titleToStagger   z-10 font-black flex text-right flex-col md:text-center leading-none text-textsizebrandh2 md:text-textsizebrandh1"
      >
        לגרום לאנשים לעצור, להרגיש, ולהגיד
        <span className=" titleToStagger  z-10  text-colorBrandPink500dark inline-block">
          זה בדיוק מה שחיפשתי
        </span>
      </h1>
      <p
        style={{ textShadow: "1px 4px 8px #2a2a2a" }}
        className=" titleToStagger  z-10 text-balance text-textsizebrandh5 font-light mt-2 md:w-2/4 leading-none text-right md:text-center"
      >
        אפיון, עיצוב ובניית אתרים לעסקים שמבינים שהאתר שלהם צריך לעבוד עבורם,
        להציג את הערך, לבלוט מהמתחרים ולייצר פניות.
      </p>
      <button
        style={{ textShadow: "1px 4px 8px #2a2a2a" }}
        className=" titleToStagger  z-10 px-6 py-3 w-80 bg-colorBrandPink500dark active:ring-4 active:ring-colorBrandPurple500light duration-200 mt-8 text-textsizebrandh6 shadow-xl font-black rounded-xl"
        type="button"
      >
        רוצים אתר שמייצר לקוחות ?
      </button>
    </section>
  );
}

export default HeroSection;
