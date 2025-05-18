import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

function GsapTraining() {
  const subjectOneTextFrom = useRef<HTMLParagraphElement>(null);
  const subjectOneButtonTo = useRef<HTMLButtonElement>(null);
  const subjectOneDivFromTo = useRef<HTMLDivElement>(null);
  const subjectOneDivSet = useRef<HTMLDivElement>(null);
  const firstTlContainer = useRef<HTMLDivElement>(null);
  const scrollTriggerContainer = useRef<HTMLDivElement>(null);
  const one = useRef<HTMLDivElement>(null);
  //   general useGSAP
  useGSAP(() => {
    gsap.set(".yoyoRepeat2", { borderRadius: 24 });
  });
  //from
  useGSAP(() => {
    gsap.from(subjectOneTextFrom.current, {
      opacity: 0,
      y: 20,
      duration: 1.5,
    });
  });
  //set
  useGSAP(() => {
    gsap.set(subjectOneDivSet.current, {
      opacity: 0,
      y: 100,
    });
    gsap.to(subjectOneDivSet.current, {
      opacity: 1,
      y: 0,
      duration: 2.5,
      delay: 3,
    });
  });
  //timeline
  useGSAP(
    () => {
      gsap.set([".enterTL1", ".enterTL2", ".enterTL3"], {
        opacity: 0,
        y: 50,
      });
      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.to(".enterTL1", { opacity: 1, y: 0, duration: 0.5 })
        .to(".enterTL2", { opacity: 1, y: 0, duration: 0.5 })
        .to(".enterTL3", { opacity: 1, y: 0, duration: 0.5 });
    },
    { scope: firstTlContainer }
  );

  const to = () => {
    if (
      subjectOneButtonTo.current?.style.backgroundColor === "rgb(194, 148, 138)"
    ) {
      gsap.to(subjectOneButtonTo.current, {
        backgroundColor: "#f55274",
        x: 0,
        ease: "bounce",
      });
    } else {
      gsap.to(subjectOneButtonTo.current, {
        backgroundColor: "#C2948A",
        x: 60,
        ease: "bounce.out",
      });
    }
  };
  const fromTo = () => {
    gsap.fromTo(
      subjectOneDivFromTo.current,
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        opacity: 1,
        scale: 1,
        ease: "bounce",
        duration: 2.5,
      }
    );
  };
  //Stagger
  const staggerDemo = () => {
    gsap.from(".jump", {
      y: 30,
      opacity: 0,
      stagger: {
        each: 0.2,
      },
    });
  };
  //   easing
  const easing = () => {
    gsap.to(".easing", {
      width: 300,
      ease: "elastic",
      duration: 2.5,
    });
  };
  //   Yoyo Repeat
  useGSAP(() => {
    gsap.to(".yoyoRepeat", {
      x: 200,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "circ",
    });
  });
  const yoyoRepeat2 = () => {
    gsap.to(".yoyoRepeat2", {
      scale: 1.5,
      duration: 1.25,
      width: 150,
      x: 100,
      backgroundColor: "#bcd979",
      borderRadius: 60,
      repeat: -1,
      yoyo: true,
      ease: "circ",
    });
  };
  useGSAP(
    () => {
      gsap.from(".one", {
        opacity: 0,
        x: -100,
        duration: 0.5,
        scrollTrigger: {
          scrub: true,
          trigger: ".one",
          start: "top 80%",
          toggleActions: "play none none none",
          markers: true,
        },
      });
      gsap.from(".two", {
        opacity: 0,
        x: 100,
        duration: 0.5,
        scrollTrigger: {
          scrub: true,
          trigger: ".two",
          start: "top 80%",
          toggleActions: "play none none none",
          markers: true,
        },
      });
      gsap.from(".three", {
        opacity: 0,
        x: -100,
        duration: 0.5,
        scrollTrigger: {
          scrub: true,
          trigger: ".three",
          start: "top 80%",
          toggleActions: "play none none none",
          markers: true,
        },
      });
      gsap.from(".four", {
        opacity: 0,
        x: 100,
        duration: 0.5,
        scrollTrigger: {
          scrub: true,
          trigger: ".four",
          start: "top 80%",
          toggleActions: "play none none none",
          markers: true,
        },
      });
    },
    { scope: scrollTriggerContainer }
  );
  useGSAP(() => {
    gsap.to(".imageToScale", {
      scale: 2,
      rotate: "720deg",
      y: "50vh",
      scrollTrigger: {
        scrub: true,
        trigger: ".imageToScaleContainer",
        markers: true,
        start: "top 80%",
        end: "bottom 50%",
      },
    });
  });

  return (
    <div className="bg-colorBrandPurple900dark text-colorBrandWhiteYellow100light h-[700vh] flex flex-col items-center  px-10 lg:px-20 py-10 lg:py-20 ">
      {/* 1 */}
      <section className="w-full flex flex-col items-center justify-center ">
        <h1 className=" text-center text-textsizebrandh5  mb-2 underline">
          #1.Subject: from,to,fromTo,set
        </h1>
        <div className="w-full flex flex-col items-center justify-center ">
          <p className="text-center mb-8">
            מדובר בפונקציות הבסיסיות של GSAP. מאפשרות להנפיש כל רכיב ממצב התחלתי
            למצב סופי. השימוש הכי בסיסי אבל הכי קריטי להבנה.
          </p>
          <h6 className=" text-center text-textsizebrandh6  mb-2 underline">
            Subject: from
          </h6>
          <p className="text-center mb-8">
            מתחיל את האנימציה ממצב שהגדרת, ו־GSAP בעצמו יחשב את המצב הנוכחי של
            האלמנט כיעד סופי.
          </p>
          <p
            ref={subjectOneTextFrom}
            className="text-textsizebrandh5 mb-10 font-black"
          >
            Im Text From
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center ">
          <h6 className=" text-center text-textsizebrandh6  mb-2 underline">
            Subject: to
          </h6>
          <p className="text-center mb-8">
            מנפיש את האלמנט ממצבו הנוכחי לערכים שתגדיר.
          </p>
          <button
            ref={subjectOneButtonTo}
            className="text-textsizebrandh5 mb-10 rounded-md bg-colorBrandPink500dark  py-2 px-6 font-black"
            onClick={to}
          >
            Move Me
          </button>
        </div>
        <div className="w-full flex flex-col items-center justify-center ">
          <h6 className=" text-center text-textsizebrandh6  mb-2 underline">
            Subject: FromTo
          </h6>
          <p className="text-center mb-8">
            מאפשר להגדיר גם את המצב ההתחלתי וגם את המצב הסופי בצורה מדויקת.{" "}
          </p>
          <div
            ref={subjectOneDivFromTo}
            className="text-textsizebrandh5 mb-10 rounded-md bg-colorBrandGreen500medium text-colorBrandGray800dark size-40 flex items-center justify-center  px-6 font-black"
            onClick={fromTo}
          >
            הפעל
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center ">
          <h6 className=" text-center text-textsizebrandh6  mb-2 underline">
            Subject: set
          </h6>
          <p className="text-center mb-8">
            שינוי מידי של מאפיינים בלי אנימציה בכלל (כמו CSS set).
          </p>
          <div
            ref={subjectOneDivSet}
            className="text-textsizebrandh5 mb-10 rounded-md bg-colorBrandGreen500medium text-colorBrandGray800dark size-32 flex items-center justify-center  px-6 font-black"
          >
            Set
          </div>
        </div>
      </section>
      {/* 2. */}
      <section className="w-full flex flex-col items-center justify-center ">
        <h1 className=" text-center text-textsizebrandh5  mb-2 underline">
          #2.Subject: Timeline
        </h1>
        <p className="text-center mb-8">
          מדובר בפונקציות הבסיסיות של GSAP. מאפשרות להנפיש כל רכיב ממצב התחלתי
          למצב סופי. השימוש הכי בסיסי אבל הכי קריטי להבנה.
        </p>
        <div
          ref={firstTlContainer}
          className="flex gap-5 "
        >
          <div className="bg-colorBrandPink500dark enterTL1 size-20 rounded-full" />
          <div className="bg-colorBrandRed500medium enterTL2 size-20 rounded-full" />
          <div className="bg-colorBrandCyan500medium enterTL3 size-20 rounded-full" />
        </div>
      </section>
      {/* 3. */}
      <section className="w-full flex flex-col items-center justify-center ">
        <h1 className=" text-center text-textsizebrandh5 mt-20  mb-2 underline">
          #3.Subject: Stagger, Easing, Repeat, yoyo
        </h1>
        <p className="text-center mb-8">
          מאפשר לתת אנימציה על קבוצת אלמנטים עם השהייה אוטומטית בין כל אלמנט.
        </p>
        <div className="flex justify-center flex-col items-center">
          <p className="underline text-textsizebrandh6 font-black mb-10">
            Stagger
          </p>
          <div
            onClick={staggerDemo}
            className="flex gap-5 mb-10 "
          >
            <div className="bg-colorBrandPink500dark jump  size-20 rounded-full" />
            <div className="bg-colorBrandRed500medium jump size-20 rounded-full" />
            <div className="bg-colorBrandCyan500medium jump size-20 rounded-full" />
            <div className="bg-colorBrandGray800dark jump  size-20 rounded-full" />
            <div className="bg-indigo-500 jump size-20 rounded-full" />
          </div>
        </div>
        <div className="flex justify-center flex-col items-center">
          <p className="underline text-textsizebrandh6 font-black mb-10">
            Easing
          </p>
          <div className="flex items-center justify-center flex-col gap-5 mb-10 ">
            <button
              onClick={easing}
              className="bg-indigo-500 py-4  px-8 rounded-lg"
            >
              Press Me
            </button>
            <div className="bg-indigo-500  easing size-20 rounded-full " />
          </div>
        </div>
        <div className="flex justify-center flex-col items-center">
          <p className="underline text-textsizebrandh6 font-black mb-10">
            Yoyo, Reapeat
          </p>
          <div className="flex items-center justify-center flex-col gap-5 mb-10 ">
            <div className="bg-indigo-500 yoyoRepeat yoyoRepeat size-20  " />
          </div>

          <button
            onClick={yoyoRepeat2}
            className="bg-indigo-500 py-4  px-8 rounded-lg"
          >
            Press Me
          </button>
          <div className="bg-red-500 yoyoRepeat2 mt-10  size-20  " />
        </div>
      </section>
      {/* 4. */}
      <section className="w-full flex flex-col items-center justify-center ">
        <h1 className=" text-center text-textsizebrandh5 mt-20  mb-2 underline">
          #3.Subject: ScrollTrigger
        </h1>
        <p className="text-center mb-8">
          מאפשר להפעיל אנימציה כאשר אלמנט מגיע לנקודה מסוימת בגלילה.
        </p>
        <div
          ref={scrollTriggerContainer}
          className="w-full"
        >
          <div className="h-[25vh] w-full one bg-black rounded-3xl "></div>
          <div className="h-[25vh] w-full two bg-amber-500 rounded-3xl"></div>
          <div className="h-[25vh] w-full three bg-lime-500 rounded-3xl"></div>
          <div className="h-[25vh] w-full four bg-indigo-500 rounded-3xl"></div>
        </div>
      </section>
      {/* 5. */}
      <section className="w-full relative imageToScaleContainer border-4 h-screen mt-6 py-10 flex flex-col items-center justify-start ">
        <h1 className=" text-center text-textsizebrandh5  mb-2 underline">
          #5.Subject: scrub
        </h1>
        <p className="text-center mb-8">
          מסנכרן את האנימציה עם הגלילה – כך שהאנימציה מתקדמת בדיוק לפי הגלילה.
        </p>

        <Image
          src={"/fullLogoWhiteSVG.svg"}
          alt={"dd"}
          width={100}
          height={100}
          className=" imageToScale  "
        />
      </section>
      {/* 6. */}
    </div>
  );
}

export default GsapTraining;
