import Image from "next/image";

function ProblemSection() {
  return (
    <section className="  relative overflow-x-hidden grid-rows-2 lg:grid-cols-12 lg:grid-rows-1 lg:items-center   h-svh text-colorBrandWhiteYellow100light bg-colorBrandPurple900dark grid grid-cols-4 place-content-center px-4 md:px-20 ">
      <Image
        src={"/purpleCT2.png"}
        alt={"upRight"}
        width={0}
        height={0}
        className="pointer-events-none absolute w-full z-10  top-0   place-self-center "
        // style={{ top: '-100px' }}
      />
      <h2 className="flex flex-col mb-4 lg:mb-0 col-span-4 lg:col-span-5 z-30 items-start justify-end text-balance text-right text-textsizebrandh2 font-black leading-none text-colorBrandWhiteYellow100light md:items-center md:text-center lg:items-start lg:text-right">
        האם אחד המשפטים האלה מוכר לכם ?{" "}
        <span className="lg:items-right inline-block text-textsizebrandh1 font-black text-colorBrandPink500dark">
          אתם לא לבד
        </span>
      </h2>
      <div className="lg:col-span-1 z-30"></div>
      {/* <div className="leading-none z-10 col-span-6">
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
      </div> */}
      {/* <div className="leading-none z-10 col-span-6">
        <h3 className="text-textsizebrandh3 font-extrabold ">
          אני לא מבין בטכנולוגיה{" "}
        </h3>
        <h3 className="text-colorBrandRed500medium text-textsizebrandh3 inline-block font-extrabold ">
          זה מאוד מסובך !
        </h3>
        <p className="text-textsizebrandh6  leading-snug w-3/4 mt-2">
          אתם לא צריכים להבין בטכנולוגיה. אני מלווה אתכם מההתחלה ועד הסוף. האתר
          יהיה קל לניהול גם אחרי המסירה, ואם תצטרכו עזרה אני כאן בשבילכם.אני לא
          עוזב את הלקוחות שלי
        </p>
      </div> */}
      <div className="leading-none z-10 col-span-6">
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
    </section>
  );
}

export default ProblemSection;
