import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function MainTitles() {
  useGSAP(() => {
    gsap.from(".whyMeTitles", {
      y: 80,
      opacity: 0,
      stagger: 0.5,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".whyMeTitles",
        // scrub: 1,
      },
    });
  });
  return (
    <div className="col-span-full z-10">
      <h3 className="text-balance text-textsizebrandh2 whyMeTitles font-black leading-none md:text-textsizebrandh1">
        מה המבדל אותי מאחרים?
      </h3>
      <h3 className="text-balance text-textsizebrandh2 whyMeTitles font-black leading-none md:text-textsizebrandh1">
        זה לא רק האתר,{" "}
        <span className="text-colorBrandPink500dark">זו כל הדרך לשם</span>
      </h3>
      <h4 className="mb-8 mt-2 w-[100%] text-textsizebrandh6 whyMeTitles lg:mb-16 lg:mt-4 lg:w-[50%]">
        במקום לזרוק אותך לטופס ולתת לך תוצאה כללית, אני נכנס איתך לעסק, מבין מה
        באמת חשוב ובונה איתך אתר שלא רק נראה טוב, אלא מדבר בדיוק אל האנשים שאתה
        רוצה למשוך.
      </h4>
    </div>
  );
}

export default MainTitles;
