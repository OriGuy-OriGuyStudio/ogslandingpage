import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function Gsap() {
  const box = useRef<HTMLDivElement>(null);
  const circle = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(".box", {
      rotation: "+=360",
      duration: 3,
      repeat: -1,
      ease: "power1.inOut",
    });
  });

  useGSAP(
    () => {
      gsap.from(".circle", {
        scale: 0,
        duration: 1,
        repeat: -1,
        ease: "power2.inOut",
        yoyo: true,
        stagger: {
          each: 0.5,
        },
      });
    },
    { scope: container }
  );

  return (
    <div className="App w-screen h-screen text-colorBrandWhiteYellow100light bg-colorBrandPurple900dark gap-8 items-center flex flex-row flex-wrap md:items-center justify-center px-6 md:px-20 ">
      <div className="nested flex flex-col gap-4 border-2 px-4 py-4 h-fit w-fit">
        <div className=" box px-4 py-4 size-32 rounded-lg bg-colorBrandPink500dark">
          Selector
        </div>
        <div
          ref={circle}
          className=" circle px-4 py-4 size-32 rounded-full bg-colorBrandGreen500medium"
        >
          ref
        </div>
      </div>
      <div className=" box px-4 py-4 size-32 rounded-lg bg-colorBrandPink500dark">
        Selector
      </div>
      <div
        ref={circle}
        className=" circle px-4 py-4 size-32 rounded-full bg-colorBrandGreen500medium"
      >
        ref - not leaking
      </div>
      <div
        className="flex flex-row gap-6"
        ref={container}
      >
        <div
          ref={circle}
          className=" circle flex flex-col items-center text-textsizebrandh2 font-black justify-center px-4 py-4 size-16 rounded-full bg-colorBrandGreen500medium text-colorBrandGray800dark"
        >
          1
        </div>
        <div
          ref={circle}
          className=" circle flex flex-col items-center text-textsizebrandh2 font-black justify-center px-4 py-4 size-16 rounded-full bg-colorBrandGreen500medium text-colorBrandGray800dark"
        >
          2
        </div>
        <div
          ref={circle}
          className=" circle flex flex-col items-center text-textsizebrandh2 font-black justify-center px-4 py-4 size-16 rounded-full bg-colorBrandGreen500medium text-colorBrandGray800dark"
        >
          3
        </div>
        <div
          ref={circle}
          className=" circle flex flex-col items-center text-textsizebrandh2 font-black justify-center px-4 py-4 size-16 rounded-full bg-colorBrandGreen500medium text-colorBrandGray800dark"
        >
          4
        </div>
        <div
          ref={circle}
          className=" circle flex flex-col items-center text-textsizebrandh2 font-black justify-center px-4 py-4 size-16 rounded-full bg-colorBrandGreen500medium text-colorBrandGray800dark"
        >
          5
        </div>
      </div>
    </div>
  );
}

export default Gsap;
