"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import BlurBGColors from "@/components/Hero/BlurBGColors";
import Image from "next/image";
import { SplitText } from "gsap/all";
import { useRef, RefObject } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";

gsap.registerPlugin([ScrollTrigger, ScrambleTextPlugin]);

function HeroSection({}) {
  const tl = useRef(gsap.timeline({ repeat: -1 }));
  const heroRef = useRef<HTMLElement | null>(null);
  const charsTl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

  const searchWordSplitRef = useRef<SplitText | null>(null);

  useGSAP(
    () => {
      // Create SplitText instance inside useGSAP to ensure DOM is ready
      const searchWordSplit = SplitText.create(".searchWord", {
        type: "chars",
      });
      searchWordSplitRef.current = searchWordSplit;
      const chars = searchWordSplit.chars;

      gsap.fromTo(
        ".titleToStagger",
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          // duration: 1.25,
          ease: "power1",
          stagger: {
            each: 0.25,
          },
        }
      );
      // gsap.set(".scrambleText", {
      //   fontSize: 32,
      //   opacity: 0.75,
      //   rotate: "4deg",
      // });
      // gsap.to(".scrambleText", {
      //   fontSize: 20,
      //   opacity: 1,
      //   rotate: 0,
      //   scrambleText: {
      //     text: "לאתר שלך יש תפקיד אחד!",
      //     chars: "$%^^&*(!@#$",
      //     speed: 0.1,
      //   },
      //   duration: 2,
      // });
      tl.current.to(".logo", { rotate: "5deg", duration: 0.5 });
      tl.current.to(".logo", { rotate: "-5deg", duration: 0.5 });
      tl.current.to(".logo", { rotate: "0deg", duration: 0.5 });
      tl.current.to(".logo", { scale: 1.1, duration: 0.5 });
      tl.current.to(".logo", { scale: 1, duration: 0.5 });

      chars.forEach((char, index) => {
        charsTl.to(
          char,
          {
            scale: 1.4,
            y: -10,
          },
          index * 0.1
        );

        charsTl.to(
          char,
          {
            scale: 1,
            y: 0,
            color: "",
            duration: 0.5,
            // ease: "power1.out",
          },
          index * 0.1 + 0.2
        );
      });
      gsap.to(".heroTitlesContainer", {
        y: "25vh",
        // rotate: "2deg",
        // filter: "blur(2px)",
        // scale: 1.1,
        scrollTrigger: {
          trigger: ".heroTitlesContainer",
          scrub: true,
          markers: true,
          start: "top top", // מתחיל רק כשהאלמנט נכנס לתוך הפריים
          end: "bottom top", // אופציונלי – קובע מתי לסיים את הסקרוב
        },
        // ease: "expo",
      });
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className=" hero z-20  relative overflow-x-hidden   h-lvh text-colorBrandWhiteYellow100light bg-colorBrandPurple900dark flex flex-col md:items-center justify-center px-4 md:px-20 "
    >
      <Image
        src={"/fullLogoWhiteSVG.svg"}
        alt={"logo"}
        width={48}
        height={48}
        className=" logo z-10 absolute top-10"
      />
      <BlurBGColors />
      <div className=" heroTitlesContainer flex flex-col md:items-center justify-center">
        <p className="  titleToStagger  z-10 font-black text-right text-textsizebrandh6">
          לאתר שלך יש תפקיד אחד!
        </p>
        <h1
          style={{ textShadow: "1px 4px 8px #2a2a2a" }}
          className=" titleToStagger   z-10 font-black flex text-right flex-col md:text-center leading-none text-textsizebrandh2 md:text-textsizebrandh1"
        >
          לגרום לאנשים לעצור, להרגיש, ולהגיד
          <span className=" titleToStagger  z-10  text-colorBrandPink500dark inline-block">
            זה בדיוק מה <span className="searchWord">שחיפשתי</span>
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
      </div>
    </section>
  );
}

export default HeroSection;
