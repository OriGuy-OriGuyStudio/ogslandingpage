import { Braces, Handshake, Target } from "lucide-react";
import Image from "next/image";
import React from "react";

function LetsDoItSection() {
  return (
    <section className="  relative overflow-x-hidden grid-rows-2 lg:grid-cols-12 lg:grid-rows-2 lg:items-stretch   h-svh text-colorBrandGray800dark bg-colorBrandGreen500medium grid grid-cols-4 place-content-center px-4 md:px-20 ">
      <Image
        src={"/greenCT2.png"}
        alt={"upRight"}
        width={0}
        height={0}
        className="pointer-events-none absolute w-full z-10  top-0   place-self-center "
        // style={{ top: '-100px' }}
      />
      <div className="items-right col-span-4 lg:col-span-full z-10 mb-2 flex flex-col justify-end text-right lg:items-center lg:text-center">
        <h3 className="text-textsizebrandh1 font-black leading-none ">
          הגיע הזמן לעשות
        </h3>
        <h3 className="text-textsizebrandh1 font-black leading-none text-colorBrandPurple500light ">
          את זה כמו שצריך
        </h3>
      </div>
      {/* <div className="col-span-4 lg:col-span-full">
        <h4 className="text-textsizebrandh4 font-extrabold">
          האתר לא מייצר פניות ?
        </h4>
        <p>
          איתי האתר שלכם נבנה בדיוק למטרות שלכם, ולא לפי תבנית כללית.אני עובד
          אתכם כדי להבין את הצרכים הספציפיים ואת הקהל שלכם.לא משנה אם כבר יש לכם
          אתר ואתם רוצה לשדרג או אם זה האתר הראשון שלכם אני פה כדי לבנות אתכם
          אתר שבאמת עובד ומותאם אישית עבורכם.
        </p>
      </div> */}
      {/* <div className="leading-none z-10 flex flex-col items-start lg:items-center text-right lg:text-center col-span-12 mt-4 lg:w-2/4 lg:mx-auto">
        <Braces
          className="inline-block size-[32px] mb-1 lg:size-[40px]"
          color="#f55274"
        />
        <h3 className="text-colorBrandGray800dark text-textsizebrandh3 inline-block font-extrabold ">
          האתר לא מייצר פניות ?
        </h3>
        <p className="text-textsizebrandh6 leading-snug w-4/4 mt-2">
          איתי האתר שלכם נבנה בדיוק למטרות שלכם, ולא לפי תבנית כללית.אני עובד
          אתכם כדי להבין את הצרכים הספציפיים ואת הקהל שלכם.לא משנה אם כבר יש לכם
          אתר ואתם רוצה לשדרג או אם זה האתר הראשון שלכם אני פה כדי לבנות אתכם
          אתר שבאמת עובד ומותאם אישית עבורכם.
        </p>
      </div> */}
      {/* <div className="leading-none z-10 flex flex-col items-start lg:items-center text-right lg:text-center col-span-12 mt-4 lg:w-2/4 lg:mx-auto">
        <Target
          className="inline-block size-[32px] mb-1 lg:size-[40px]"
          color="#f55274"
        />
        <h3 className="text-colorBrandGray800dark text-textsizebrandh3 inline-block font-extrabold ">
          אפשר גם אחרת
        </h3>
        <p className="text-textsizebrandh6 leading-snug w-4/4 mt-2">
          אתר ברור, נעים, ומדויק לעסק שלכם.כזה שמסביר בדיוק מה אתם מציעים,
          ומעודד לקוחות לפנות דווקא אליכם.
        </p>
      </div> */}
      <div className="leading-none z-10 flex flex-col items-start lg:items-center text-right lg:text-center col-span-12 mt-4 lg:w-2/4 lg:mx-auto">
        <Handshake
          className="inline-block size-[32px] mb-1 lg:size-[40px]"
          color="#f55274"
        />
        <h3 className="text-colorBrandGray800dark text-textsizebrandh3 inline-block font-extrabold ">
          עושים את זה ביחד!
        </h3>
        <p className="text-textsizebrandh6 leading-snug w-4/4 mt-2">
          תהליך פשוט, אישי, מקצועי, בלי כאבי ראש וטרטור בין ספקים שונים.אתם
          מתמקדים במה שאתם עושים הכי טוב ואני דואג שהאתר יעבוד בשבילם.
        </p>
        <a
          className="mt-4"
          href="https://wa.me/message/BAPSKBNTSV6GA1"
        >
          <button className="group mb-2 cursor-pointer rounded-xl bg-colorBrandPink500dark px-6 py-3 text-textsizebrandh6 font-black text-colorBrandWhiteYellow100light shadow-[0px_8px_16px_0_rgba(245,82,116,0.25)]">
            בואו נעשה את זה כמו שצריך
          </button>
        </a>
      </div>
    </section>
  );
}

export default LetsDoItSection;
