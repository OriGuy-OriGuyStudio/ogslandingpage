"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

function ProblemSection() {
  useGSAP(
    () => {
      // gsap.to(".areaToPin", {
      //   scrollTrigger: {
      //     trigger: ".problemSection",
      //     start: "top top",
      //     scrub: true,
      //     pin: true,
      //     end: "+=3000",
      //   },
      // });
      if (window.outerWidth >= 1024) {
        ScrollTrigger.create({
          trigger: ".problemSection",
          start: "top top",
          end: "bottom bottom",
          pin: ".areaToPin",
          markers: true,
          pinType: "transform",
        });
        ScrollTrigger.create({
          trigger: ".problemSection",
          start: "top top",
          end: "bottom bottom",
          pin: ".imageToPin",
          pinType: "transform",
          anticipatePin: 1,
        });
      } else {
        const contents = gsap.utils.toArray(".content");

        gsap.to(contents, {
          xPercent: 200,
          scrollTrigger: {
            trigger: ".problemSection",
            pin: true,
            scrub: 1,
            pinType: "transform",
            anticipatePin: 1,
            pinReparent: false,
          },
        });
      }
    },
    { revertOnUpdate: true }
  );
  // h - svh;
  return (
    <section className=" problemSection bg-colorBrandPurple900dark  relative h-screen lg:h-fit lg:overscroll-y-auto grid-rows-2 lg:grid-cols-12 lg:grid-rows-1 lg:items-center   text-colorBrandWhiteYellow100light lg:grid flex  flex-col items-center justify-center grid-cols-4 place-content-center px-4 md:px-20 ">
      <Image
        src={"/purpleCT2.png"}
        alt={"upRight"}
        width={0}
        height={0}
        className="pointer-events-none imageToPin absolute w-full z-10  top-0   place-self-center "
      />
      <h2 className="flex areaToPin flex-col mb-4 lg:mb-0 col-span-4 lg:col-span-5 z-30 items-start justify-end text-balance text-right text-textsizebrandh2 font-black leading-none text-colorBrandWhiteYellow100light md:items-center md:text-center lg:items-start lg:text-right">
        האם אחד המשפטים האלה מוכר לכם ?{" "}
        <span className="lg:items-right inline-block text-textsizebrandh1 font-black text-colorBrandPink500dark">
          אתם לא לבד
        </span>
      </h2>
      <div className=" hidden lg:col-span-1 z-30"></div>
      {/* Start Desktop */}
      <div className=" hidden itemsScroll z-20 lg:flex lg:flex-col lg:w-full w-[300vw] flex-row   col-span-full lg:col-span-6">
        <div className=" lg:h-screen lg:w-full w-screen h-fit flex flex-col lg:justify-center justify-start items-start leading-none z-10 col-span-6  ">
          <h3 className="text-textsizebrandh3 font-extrabold ">
            עשיתי את זה בעבר{" "}
          </h3>
          <h3 className="text-colorBrandRed500medium text-textsizebrandh3 inline-block font-extrabold ">
            וזה לא עבד לי
          </h3>
          <p className="text-textsizebrandh6  leading-snug w-3/4 mt-2">
            אולי פשוט לא בנו לכם אותו נכון. אתר לא אמור להיות רק "יפה" הוא צריך
            לגרום לאנשים לפנות אליכם וזה בדיוק מה שאני עושה
          </p>
        </div>
        <div className=" lg:h-screen lg:w-full w-screen h-fit flex flex-col lg:justify-center justify-start items-start leading-none z-10 col-span-6 ">
          <h3 className="text-textsizebrandh3 font-extrabold ">
            אני לא מבין בטכנולוגיה{" "}
          </h3>
          <h3 className="text-colorBrandRed500medium text-textsizebrandh3 inline-block font-extrabold ">
            זה מאוד מסובך !
          </h3>
          <p className="text-textsizebrandh6  leading-snug w-3/4 mt-2">
            אתם לא צריכים להבין בטכנולוגיה. אני מלווה אתכם מההתחלה ועד הסוף.
            האתר יהיה קל לניהול גם אחרי המסירה, ואם תצטרכו עזרה אני כאן
            בשבילכם.אני לא עוזב את הלקוחות שלי
          </p>
        </div>
        <div className=" lg:h-screen lg:w-full w-screen h-fit flex flex-col lg:justify-center justify-start items-start leading-none z-10 col-span-6 ">
          <h3 className="text-textsizebrandh3 font-extrabold ">
            היום הכל זה רשתות חברתיות ו AI{" "}
          </h3>
          <h3 className="text-colorBrandRed500medium text-textsizebrandh3 inline-block font-extrabold ">
            אתר זה לא רלוונטי
          </h3>
          <p className="text-textsizebrandh6 leading-snug w-4/4 mt-2">
            נכון, רשתות חברתיות ו AI עושים רעש וללא ספק הם חלק בלתי נפרד מתהליך
            השיווק. אבל כשהלוקח רוצה לבדוק אותך ברצינות הוא מחפש אתר מקצועי. זה
            המקום היחידי בו אתם שולטים על מה שהלקוח רואה, בלי אלגוריתמים, בלי
            הסחות דעת רק אתם והמסר שלכם. אתר טוב לא מחליף את הרשתות החברתיות הוא
            כלי שיווקי שמשלים את המעטפת של העסק שלכם.
          </p>
        </div>
      </div>
      {/* End Desktop */}

      {/* mobile */}
      <div
        id="horizontal"
        className="lg:hidden flex flex-row flex-nowrap   h-fit overflow-scroll no-scrollbar w-full border-colorBrandWhiteYellow100light"
      >
        <div className="content h-full w-full  flex-shrink-0    flex flex-col justify-start items-start leading-none">
          <h3 className="text-textsizebrandh3 font-extrabold ">
            עשיתי את זה בעבר{" "}
          </h3>
          <h3 className="text-colorBrandRed500medium text-textsizebrandh3 inline-block font-extrabold ">
            וזה לא עבד לי
          </h3>
          <p className="text-textsizebrandh6  leading-snug w-3/4 mt-2">
            אולי פשוט לא בנו לכם אותו נכון. אתר לא אמור להיות רק "יפה" הוא צריך
            לגרום לאנשים לפנות אליכם וזה בדיוק מה שאני עושה
          </p>
        </div>
        <div className="content h-full w-full flex-shrink-0    flex flex-col justify-start items-start leading-none">
          <h3 className="text-textsizebrandh3 font-extrabold ">
            אני לא מבין בטכנולוגיה{" "}
          </h3>
          <h3 className="text-colorBrandRed500medium text-textsizebrandh3 inline-block font-extrabold ">
            זה מאוד מסובך !
          </h3>
          <p className="text-textsizebrandh6  leading-snug w-3/4 mt-2">
            אתם לא צריכים להבין בטכנולוגיה. אני מלווה אתכם מההתחלה ועד הסוף.
            האתר יהיה קל לניהול גם אחרי המסירה, ואם תצטרכו עזרה אני כאן
            בשבילכם.אני לא עוזב את הלקוחות שלי
          </p>
        </div>
        <div className="content h-full w-full   flex-shrink-0  flex flex-col justify-start items-start leading-none">
          <h3 className="text-textsizebrandh3 font-extrabold ">
            היום הכל זה רשתות חברתיות ו AI{" "}
          </h3>
          <h3 className="text-colorBrandRed500medium text-textsizebrandh3 inline-block font-extrabold ">
            אתר זה לא רלוונטי
          </h3>
          <p className="text-textsizebrandh6 leading-snug w-4/4 mt-2">
            נכון, רשתות חברתיות ו AI עושים רעש וללא ספק הם חלק בלתי נפרד מתהליך
            השיווק. אבל כשהלוקח רוצה לבדוק אותך ברצינות הוא מחפש אתר מקצועי. זה
            המקום היחידי בו אתם שולטים על מה שהלקוח רואה, בלי אלגוריתמים, בלי
            הסחות דעת רק אתם והמסר שלכם. אתר טוב לא מחליף את הרשתות החברתיות הוא
            כלי שיווקי שמשלים את המעטפת של העסק שלכם.
          </p>
        </div>
      </div>
      {/* <div className=" z-20 flex h-screen  scrollWrapper lg:hidden  w-[300vw] flex-row   col-span-full ">
        <div className=" z-20 itemsScroll flex flex-row col-span-full lg:col-span-6">
          <div className="  w-screen flex flex-col justify-start items-start leading-none z-10 col-span-6  ">
            <h3 className="text-textsizebrandh3 font-extrabold ">
              עשיתי את זה בעבר{" "}
            </h3>
            <h3 className="text-colorBrandRed500medium text-textsizebrandh3 inline-block font-extrabold ">
              וזה לא עבד לי
            </h3>
            <p className="text-textsizebrandh6  leading-snug w-3/4 mt-2">
              אולי פשוט לא בנו לכם אותו נכון. אתר לא אמור להיות רק "יפה" הוא
              צריך לגרום לאנשים לפנות אליכם וזה בדיוק מה שאני עושה
            </p>
          </div>
          <div className=" w-screen  flex flex-col justify-start items-start leading-none z-10 col-span-6 ">
            <h3 className="text-textsizebrandh3 font-extrabold ">
              אני לא מבין בטכנולוגיה{" "}
            </h3>
            <h3 className="text-colorBrandRed500medium text-textsizebrandh3 inline-block font-extrabold ">
              זה מאוד מסובך !
            </h3>
            <p className="text-textsizebrandh6  leading-snug w-3/4 mt-2">
              אתם לא צריכים להבין בטכנולוגיה. אני מלווה אתכם מההתחלה ועד הסוף.
              האתר יהיה קל לניהול גם אחרי המסירה, ואם תצטרכו עזרה אני כאן
              בשבילכם.אני לא עוזב את הלקוחות שלי
            </p>
          </div>
          <div className="  w-screen flex flex-col justify-start items-start leading-none z-10 col-span-6 ">
            <h3 className="text-textsizebrandh3 font-extrabold ">
              היום הכל זה רשתות חברתיות ו AI{" "}
            </h3>
            <h3 className="text-colorBrandRed500medium text-textsizebrandh3 inline-block font-extrabold ">
              אתר זה לא רלוונטי
            </h3>
            <p className="text-textsizebrandh6 leading-snug w-4/4 mt-2">
              נכון, רשתות חברתיות ו AI עושים רעש וללא ספק הם חלק בלתי נפרד
              מתהליך השיווק. אבל כשהלוקח רוצה לבדוק אותך ברצינות הוא מחפש אתר
              מקצועי. זה המקום היחידי בו אתם שולטים על מה שהלקוח רואה, בלי
              אלגוריתמים, בלי הסחות דעת רק אתם והמסר שלכם. אתר טוב לא מחליף את
              הרשתות החברתיות הוא כלי שיווקי שמשלים את המעטפת של העסק שלכם.
            </p>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default ProblemSection;
