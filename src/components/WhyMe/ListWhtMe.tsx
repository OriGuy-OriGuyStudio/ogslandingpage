import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Sparkle } from "lucide-react";
import Image from "next/image";
import React from "react";

function ListWhtMe() {
  useGSAP(() => {
    gsap.from(".whyMeListItems", {
      y: 80,
      opacity: 0,
      stagger: 0.3,
      duration: 0.3,
      delay: 2,
      scrollTrigger: {
        trigger: ".whyMeTitles",
        start: "top center",
      },
    });
    gsap.from(".heart", {
      scale: 0.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 1.5,
    });
  });
  return (
    <>
      <ul className=" col-span-4 lg:col-span-8 inline-block  space-y-4 rounded-lg border-r-4  border-colorBrandPurple500light pr-4  ">
        <li className="flex items-start whyMeListItems justify-start gap-2 border-b-2 border-b-colorBrandWhiteYellow100lightOpacity pb-4">
          <Sparkle
            size={32}
            color={"#F55274"}
            className="shrink-0 animate-pulse"
          />
          <p className="text-textsizebrandh6">
            תהליך אישי - אתה לא עוד לקוח במערכת, אני מלווה אותך אחד על אחד,
            תהליך אישי ומותאם
          </p>
        </li>
        <li className="flex items-start whyMeListItems justify-start gap-2 border-b-2 border-b-colorBrandWhiteYellow100lightOpacity pb-4">
          <Sparkle
            size={32}
            color={"#F55274"}
            className="shrink-0 animate-pulse"
          />
          <p className="text-textsizebrandh6">
            התאמה מלאה לעסק – בלי תבניות מוכנות מראש
          </p>
        </li>
        <li className="flex items-start whyMeListItems justify-start gap-2 border-b-2 border-b-colorBrandWhiteYellow100lightOpacity pb-4">
          <Sparkle
            size={32}
            color={"#F55274"}
            className="shrink-0 animate-pulse"
          />
          <p className="text-textsizebrandh6">חשיבה אסטרטגית, לא רק עיצוב</p>
        </li>
        <li className="flex items-start whyMeListItems justify-start gap-2 border-b-2 border-b-colorBrandWhiteYellow100lightOpacity pb-4">
          <Sparkle
            size={32}
            color={"#F55274"}
            className="shrink-0 animate-pulse"
          />
          <p className="text-textsizebrandh6">
            אתר שנבנה עם מטרה ברורה - לייצר לך פניות או כל מטרה עסקית שנקבע
            באפיון
          </p>
        </li>
        <li className="flex items-start whyMeListItems justify-start gap-2 border-b-2 border-b-colorBrandWhiteYellow100lightOpacity pb-4">
          <Sparkle
            size={32}
            color={"#F55274"}
            className="shrink-0 animate-pulse"
          />
          <p className="text-textsizebrandh6">
            שקיפות, זמינות וליווי גם אחרי העלייה לאוויר
          </p>
        </li>
        <li className="flex items-start whyMeListItems justify-start gap-2 border-b-2 border-b-colorBrandWhiteYellow100lightOpacity pb-4">
          <Sparkle
            size={32}
            color={"#F55274"}
            className="shrink-0 animate-pulse"
          />
          <p className="text-textsizebrandh6">
            גישה בגובה העיניים - אולי כלי העבודה שלי מסובכים, אבל לך אני משפט את
            הכל{" "}
          </p>
        </li>
      </ul>
      <Image
        src="/heart.svg"
        width={300}
        height={300}
        className="col-span-4 mt-10 heart  whyMeListItems lg:mt-0 place-self-center"
        alt="heart icon"
      />
    </>
  );
}

export default ListWhtMe;
