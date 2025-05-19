import CtaPain from "@/components/pain/CtaPain";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
// gsap.registerPlugin(useGSAP);
function PainSection() {
  const textRef = useRef<null | HTMLDivElement>(null);

  useGSAP(() => {
    gsap.set(textRef.current, {
      scale: 0,
      opacity: 0,
    });
    gsap.to(textRef.current, {
      scrollTrigger: {
        trigger: ".pain",
        markers: true,
        start: "top 50%",
        onEnter: () => {
          gsap.to(textRef.current, {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            delay: 3,
          });
        },
      },
    });
  });
  return (
    <section className=" pain relative z-20 h-lvh flex flex-col items-center justify-center  content-center  bg-colorBrandCyan500medium text-colorBrandGray800dark px-4 md:px-20">
      <CtaPain />

      <div
        ref={textRef}
        className="mt-8  flex flex-col items-center justify-center    text-center lg:text-right text-textsizebrandh4 font-extrabold leading-none text-colorBrandGray800dark lg:text-textsizebrandh3"
      >
        <h2 className=" text-textsizebrandh2 font-black md:text-textsizebrandh2 lg:text-textsizebrandh2">
          רוב{" "}
          <span
            style={{ textShadow: "0px 4px 8px rgba(0, 0, 0, 0.10)" }}
            className="text-colorBrandPurple500light"
          >
            האתרים
          </span>{" "}
          נראים טוב.
        </h2>
        <h3 className="mb-2 text-textsizebrandh5 font-bold text-center leading-none sm:w-[60%]">
          אבל הם לא מספרים את{" "}
          <span
            style={{ textShadow: "0px 4px 8px rgba(0, 0, 0, 0.10)" }}
            className="font-bold text-colorBrandRed400light"
          >
            הסיפור שלך
          </span>
          , לא בונים{" "}
          <span
            style={{ textShadow: "0px 4px 8px rgba(0, 0, 0, 0.10)" }}
            className="font-bold text-colorBrandRed400light"
          >
            אמון
          </span>{" "}
          ולא מביאים{" "}
          <span
            style={{ textShadow: "0px 4px 8px rgba(0, 0, 0, 0.10)" }}
            className="font-bold text-colorBrandRed400light"
          >
            תוצאות
          </span>
          .
        </h3>
        <p className="w-full text-pretty text-center text-textsizebrandh6 font-normal leading-normal sm:w-[70%]">
          בעלי עסקים משקיעים אלפי שקלים באתר, אבל בסוף נשארים עם משהו יפה שלא
          באמת מביא פניות.
        </p>
        <a href="https://wa.me/message/BAPSKBNTSV6GA1">
          <button className="mt-4 rounded-2xl bg-colorBrandPink500dark px-6 py-3 text-textsizebrandh6 text-colorBrandWhiteYellow100light">
            רוצים אתר שמביא תוצאות?
          </button>
        </a>
      </div>
    </section>
  );
}

export default PainSection;
