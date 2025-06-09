import gsap from "gsap";
import Image from "next/image";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Braces, Handshake, Target, ArrowBigLeft } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);
function LetsDoItSection() {
  useGSAP(() => {
    gsap.from(".letsDoItTitle", {
      scale: 4,
      duration: 1.25,
      ease: "power1",
      scrollTrigger: {
        trigger: ".letsDoItSection",
        // scrub: 1,
      },
    });
    gsap.from(".step", {
      y: 80,
      opacity: 0,
      stagger: 0.5,
      duration: 0.5,
      delay: 2,
      scrollTrigger: {
        trigger: ".letsDoItSection",
        // scrub: 1,
      },
    });
  });
  return (
    <section className=" letsDoItSection bg-fixed flex py-20 rounded-3xl shadow-2xl bg-colorBrandGreen500medium justify-center items-center text-colorBrandGray800dark flex-col px-4 md:px-20">
      <Image
        src={"/greenCT2.png"}
        alt={"upRight"}
        width={0}
        height={0}
        className="pointer-events-none absolute w-full z-10  top-0   place-self-center "
        // style={{ top: '-100px' }}
      />
      <div className="items-right  col-span-4 lg:col-span-full z-10 mb-2 flex flex-col justify-end text-right lg:items-center lg:text-center">
        <h3 className="text-textsizebrandh1 letsDoItTitle font-black leading-none ">
          הגיע הזמן לעשות
          <span className="text-textsizebrandh1 block font-black leading-none text-colorBrandPurple500light ">
            את זה כמו שצריך
          </span>
        </h3>

        <div className="letsDoItTextsContainer mt-10  grid gap-2 lg:grid-cols-12">
          <div className="flex flex-col col-span-4 relative step mt-4">
            <Braces
              className="inline-block size-[32px] mb-1 lg:size-[40px]"
              color="#f55274"
            />
            <h3 className="text-colorBrandGray800dark text-right text-textsizebrandh3 inline-block font-extrabold ">
              האתר לא מייצר פניות ?
            </h3>
            <p className="text-textsizebrandh6 text-right leading-snug w-4/4 mt-2">
              איתי האתר שלכם נבנה בדיוק למטרות שלכם, ולא לפי תבנית כללית.אני
              עובד אתכם כדי להבין את הצרכים הספציפיים ואת הקהל שלכם.לא משנה אם
              כבר יש לכם אתר ואתם רוצה לשדרג או אם זה האתר הראשון שלכם אני פה
              כדי לבנות אתכם אתר שבאמת עובד ומותאם אישית עבורכם.
            </p>
          </div>
          <ArrowBigLeft
            className="col-span-1 self-center step   stroke-colorBrandPurple500light fill-colorBrandPurple500light"
            size={80}
          />
          <div className="flex flex-col  col-span-3 step  mt-4">
            <Target
              className="inline-block size-[32px] mb-1 lg:size-[40px]"
              color="#f55274"
            />
            <h3 className="text-colorBrandGray800dark text-right  text-textsizebrandh3 inline-block leading-none font-extrabold ">
              אפשר גם אחרת
            </h3>
            <p className="text-textsizebrandh6 text-right leading-snug w-4/4 mt-2">
              אתר ברור, נעים, ומדויק לעסק שלכם.כזה שמסביר בדיוק מה אתם מציעים,
              ומעודד לקוחות לפנות דווקא אליכם.
            </p>
          </div>
          <ArrowBigLeft
            className="col-span-1 self-center step  stroke-colorBrandPurple500light fill-colorBrandPurple500light"
            size={80}
          />
          <div className="flex flex-col step  col-span-3 text-right mt-4">
            <Handshake
              className="inline-block size-[32px] mb-1 lg:size-[40px]"
              color="#f55274"
            />
            <h3 className="text-colorBrandGray800dark text-textsizebrandh3 leading-none inline-block font-extrabold ">
              עושים את זה ביחד!
            </h3>
            <p className="text-textsizebrandh6  leading-snug w-4/4 mt-2">
              תהליך פשוט, אישי, מקצועי, בלי כאבי ראש וטרטור בין ספקים שונים.אתם
              מתמקדים במה שאתם עושים הכי טוב ואני דואג שהאתר יעבוד בשבילם.
            </p>
          </div>
        </div>
      </div>
    </section>
    // <section className="  relative overflow-x-hidden grid-rows-2 lg:grid-cols-12 lg:grid-rows-2 lg:items-stretch   h-svh text-colorBrandGray800dark bg-colorBrandGreen500medium grid grid-cols-4 place-content-center px-4 md:px-20 ">
    //   <Image
    //     src={"/greenCT2.png"}
    //     alt={"upRight"}
    //     width={0}
    //     height={0}
    //     className="pointer-events-none absolute w-full z-10  top-0   place-self-center "
    //     // style={{ top: '-100px' }}
    //   />
    //   <div className="items-right col-span-4 lg:col-span-full z-10 mb-2 flex flex-col justify-end text-right lg:items-center lg:text-center">
    //     <h3 className="text-textsizebrandh1 font-black leading-none ">
    //       הגיע הזמן לעשות
    //     </h3>
    //     <h3 className="text-textsizebrandh1 font-black leading-none text-colorBrandPurple500light ">
    //       את זה כמו שצריך
    //     </h3>
    //   </div>
    //   {/* <div className="col-span-4 lg:col-span-full">
    //     <h4 className="text-textsizebrandh4 font-extrabold">
    //       האתר לא מייצר פניות ?
    //     </h4>
    //     <p>
    //       איתי האתר שלכם נבנה בדיוק למטרות שלכם, ולא לפי תבנית כללית.אני עובד
    //       אתכם כדי להבין את הצרכים הספציפיים ואת הקהל שלכם.לא משנה אם כבר יש לכם
    //       אתר ואתם רוצה לשדרג או אם זה האתר הראשון שלכם אני פה כדי לבנות אתכם
    //       אתר שבאמת עובד ומותאם אישית עבורכם.
    //     </p>
    //   </div> */}
    //   {/* <div className="leading-none z-10 flex flex-col items-start lg:items-center text-right lg:text-center col-span-12 mt-4 lg:w-2/4 lg:mx-auto">
    // <Braces
    //   className="inline-block size-[32px] mb-1 lg:size-[40px]"
    //   color="#f55274"
    // />
    // <h3 className="text-colorBrandGray800dark text-textsizebrandh3 inline-block font-extrabold ">
    //   האתר לא מייצר פניות ?
    // </h3>
    // <p className="text-textsizebrandh6 leading-snug w-4/4 mt-2">
    //   איתי האתר שלכם נבנה בדיוק למטרות שלכם, ולא לפי תבנית כללית.אני עובד
    //   אתכם כדי להבין את הצרכים הספציפיים ואת הקהל שלכם.לא משנה אם כבר יש לכם
    //   אתר ואתם רוצה לשדרג או אם זה האתר הראשון שלכם אני פה כדי לבנות אתכם
    //   אתר שבאמת עובד ומותאם אישית עבורכם.
    // </p>
    //   </div> */}
    //   {/* <div className="leading-none z-10 flex flex-col items-start lg:items-center text-right lg:text-center col-span-12 mt-4 lg:w-2/4 lg:mx-auto">
    // <Target
    //   className="inline-block size-[32px] mb-1 lg:size-[40px]"
    //   color="#f55274"
    // />
    // <h3 className="text-colorBrandGray800dark text-textsizebrandh3 inline-block font-extrabold ">
    //   אפשר גם אחרת
    // </h3>
    // <p className="text-textsizebrandh6 leading-snug w-4/4 mt-2">
    //   אתר ברור, נעים, ומדויק לעסק שלכם.כזה שמסביר בדיוק מה אתם מציעים,
    //   ומעודד לקוחות לפנות דווקא אליכם.
    // </p>
    //   </div> */}
    //   <div className="leading-none z-10 flex flex-col items-start lg:items-center text-right lg:text-center col-span-12 mt-4 lg:w-2/4 lg:mx-auto">
    // <Handshake
    //   className="inline-block size-[32px] mb-1 lg:size-[40px]"
    //   color="#f55274"
    // />
    // <h3 className="text-colorBrandGray800dark text-textsizebrandh3 inline-block font-extrabold ">
    //   עושים את זה ביחד!
    // </h3>
    // <p className="text-textsizebrandh6 leading-snug w-4/4 mt-2">
    //   תהליך פשוט, אישי, מקצועי, בלי כאבי ראש וטרטור בין ספקים שונים.אתם
    //   מתמקדים במה שאתם עושים הכי טוב ואני דואג שהאתר יעבוד בשבילם.
    // </p>
    //     <a
    //       className="mt-4"
    //       href="https://wa.me/message/BAPSKBNTSV6GA1"
    //     >
    //       <button className="group mb-2 cursor-pointer rounded-xl bg-colorBrandPink500dark px-6 py-3 text-textsizebrandh6 font-black text-colorBrandWhiteYellow100light shadow-[0px_8px_16px_0_rgba(245,82,116,0.25)]">
    //         בואו נעשה את זה כמו שצריך
    //       </button>
    //     </a>
    //   </div>
    // </section>
  );
}

export default LetsDoItSection;
