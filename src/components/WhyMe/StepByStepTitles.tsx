import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

function StepByStepTitles() {
  function animateStepByStepTitles() {
    gsap.from(".firstTitle", {
      x: -200,
      opacity: 0,
      duration: 1,
      ease: "sine.out",
      scrollTrigger: {
        trigger: ".setByStepTitles",
        start: "top center",
      },
    });
    gsap.from(".secondTitle", {
      x: 200,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "sine.out",
      scrollTrigger: {
        trigger: ".setByStepTitles",
        start: "top center",
      },
    });
    gsap.from(".thirdTitle", {
      x: -200,
      opacity: 0,
      duration: 1,
      delay: 1,
      ease: "sine.out",
      scrollTrigger: {
        trigger: ".setByStepTitles",
        start: "top center",
      },
    });
  }
  useGSAP(() => {
    animateStepByStepTitles();
  });
  return (
    <div className="col-span-full setByStepTitles w-full mt-10 lg:col-span-12 lg:mt-20">
      <span className="text-center text-textsizebrandh1 col-span-full font-black leading-none text-colorBrandWhiteYellow100light">
        <h3 className="firstTitle relative">איך זה עובד בפועל?</h3>
        <h3 className="secondTitle relative"> שלב אחרי שלב </h3>
        <h3 className="thirdTitle relative">בלי סיבוכים</h3>
      </span>
    </div>
  );
}

export default StepByStepTitles;
