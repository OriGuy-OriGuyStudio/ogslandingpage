import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

function CtaPain() {
  const changingNumRef = useRef<HTMLDivElement | null>(null);
  const [counter, setCounter] = useState<number>(3);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pain",
        markers: true,
        start: "top 50%",
      },
    });
    tl.to(changingNumRef.current, {
      text: counter.toString(),
      duration: 0.5,
      scale: 1,
      opacity: 1,
      delay: 1,
      ease: "elastic",
      onComplete: () => setCounter((prev: number) => prev - 1),
    })
      .to(changingNumRef.current, {
        text: counter.toString(),
        duration: 0.5,
        scale: 1,
        opacity: 1,
        delay: 1,
        ease: "elastic",
        onComplete: () => setCounter((prev: number) => prev - 1),
      })
      .to(changingNumRef.current, {
        text: counter.toString(),
        duration: 0.5,
        scale: 1,
        opacity: 1,
        delay: 1,
        ease: "elastic",
        onComplete: () => setCounter((prev: number) => prev - 1),
      });
  });

  return (
    <div className=" ctaPain bg-colorBrandWhiteYellow100light mx-auto  border-colorBrandPink500dark text-colorBrandGray800dark  flex h-fit  flex-col items-center justify-center rounded-tr-[100px] rounded-b-[24px] rounded-tl-[24px] border-4 p-8 text-center leading-none shadow-2xl lg:items-center lg:justify-center lg:text-center">
      <p className="text-textsizebrandh1 text-colorBrandPurple500light font-black">
        אם
      </p>
      <p className="text-textsizebrandh3 font-black">הלקוח לא</p>
      <p className="text-textsizebrandh4 inline-flex items-center justify-center gap-2 whitespace-nowrap font-black">
        מבין תוך
        <span className="text-textsizebrandh1 overflow-hidden text-colorBrandPurple500light inline-flex flex-col">
          <span
            ref={changingNumRef}
            className="first inline-block"
          >
            {counter}
          </span>
          <span className="text-colorBrandPink500dark text-textsizebrandp">
            שניות
          </span>
        </span>
        מה אתם
      </p>
      <p className="text-textsizebrandh2 font-black">מציעים</p>
      <p className="text-textsizebrandh1 text-colorBrandRed400light whitespace-nowrap font-black">
        איבדתם אותו
      </p>
    </div>
  );
}

export default CtaPain;
