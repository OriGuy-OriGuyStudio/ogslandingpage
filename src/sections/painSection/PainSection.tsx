import CtaPain from "@/components/pain/CtaPain";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef, useState } from "react";
import "./painSection.css";
import Image from "next/image";
// gsap.registerPlugin(useGSAP);
function PainSection() {
  const textRef = useRef<null | HTMLDivElement>(null);
  const [showText, setShowText] = useState<boolean>(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    gsap.to(".pain", {
      scrollTrigger: {
        trigger: ".pain",
        markers: false,
        start: "top 50%",
        onEnter: () => {
          tl.to(".pain", {
            backgroundColor: "#d93333",
            duration: 0.25,
          })
            .to(".pain", {
              backgroundColor: "#fefdf5",
              duration: 0.25,
              delay: 0.5,
            })
            .to(".pain", {
              backgroundColor: "#d93333",
              duration: 0.25,
              delay: 0.5,
            })
            .to(".pain", {
              backgroundColor: "#fefdf5",
              duration: 0.25,
              delay: 0.5,
            })
            .to(".pain", {
              backgroundColor: "#d93333",
              duration: 0.25,
              delay: 0.5,
            })
            .to(".pain", {
              backgroundColor: "#8ac4d4",
              duration: 0.5,
              delay: 1.5,
            });
        },
      },
    });
    // gsap.to(textRef.current, {
    //   scrollTrigger: {
    //     trigger: ".pain",
    //     markers: false,
    //     start: "top 50%",
    //     onEnter: () => {
    //       gsap.to(textRef.current, {
    //         scale: 1,
    //         opacity: 1,
    //         duration: 1.5,
    //         display: "block",
    //       });
    //     },
    //   },
    // gsap.set(textRef.current, {
    //   scale: 0,
    //   opacity: 0,
    //   display: "none",
    // });
    // gsap.to(textRef.current, {
    //   scrollTrigger: {
    //     trigger: ".pain",
    //     markers: false,
    //     start: "top 50%",
    //     onEnter: () => {
    //       gsap.to(textRef.current, {
    //         scale: 1,
    //         opacity: 1,
    //         duration: 1.5,
    //         display: "block",
    //       });
    //     },
    //   },
    // });
  });
  return (
    <section
      className={` pain relative bg-colorBrandCyan500medium z-20 h-lvh flex flex-col items-center justify-center  content-center ${
        showText && "bg-gradient-to-b to-[#c9e4eb]  from-[#8ac4d4]"
      }  text-colorBrandGray800dark px-4 md:px-20`}
    >
      <div className="w-full absolute -top-4 opacity-50 blur-xl   -z-10  bg-gradient-to-r from-[#f55274] from-20% via-[#160e48] via-40% to-[#3521ab] to-80% h-10"></div>
      <Image
        src={"/cyanCT2.png"}
        alt={"warning"}
        width={0}
        height={0}
        className={`pointer-events-none absolute w-full z-10  top-0   place-self-center ${
          showText ? "absolute" : "hidden"
        } `}
      />
      <CtaPain setShowText={setShowText} />
      {/* {showText ? (
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
      ) : (
        <></>
      )} */}
      <Image
        src={"/warning.png"}
        alt={"warning"}
        width={25}
        height={25}
        className={`animate-ping mt-8 absolute top-0 right-10 lg:right-20 `}
      />
      <Image
        src={"/warning.png"}
        alt={"warning"}
        width={25}
        height={25}
        className={`animate-ping mt-8 absolute top-0 left-10 lg:left-20 `}
      />
      <Image
        src={"/warning.png"}
        alt={"warning"}
        width={25}
        height={25}
        className={`animate-ping mt-8 absolute bottom-0 left-10 lg:left-20 `}
      />
      <Image
        src={"/warning.png"}
        alt={"warning"}
        width={25}
        height={25}
        className={`animate-ping mt-8 absolute bottom-0 right-10 lg:right-20 `}
      />

      <div
        ref={textRef}
        className={`mt-8 showTextOnCountdown ${
          showText && "displayText"
        }  flex flex-col items-center justify-center    text-center lg:text-right text-textsizebrandh4 font-extrabold leading-none text-colorBrandGray800dark lg:text-textsizebrandh3`}
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
