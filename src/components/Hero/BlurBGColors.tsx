import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { gsap } from "gsap";

function BlurBGColors() {
  useGSAP(() => {
    gsap.from(".scale", {
      opacity: 1,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "sine",
      stagger: {
        each: 0.5,
      },
    });
  });
  return (
    <>
      <Image
        src={"/purpleTL2.png"}
        alt={"as"}
        width={60}
        height={60}
        className=" scale z-0 pointer-events-none absolute  inline size-96 md:size-[36rem]"
        style={{ top: 0, left: 0 }}
      />
      <Image
        src={"/pinkTR2.png"}
        alt={"upRight"}
        width={20}
        height={20}
        loading="eager"
        fetchPriority="high"
        className="scale z-0 pointer-events-none absolute  size-80 md:size-[36rem]"
        style={{ top: 0, right: 0 }}
      />
      <Image
        src={"/pinkBL2.png"}
        alt={"downLeft"}
        width={20}
        height={20}
        loading="eager"
        fetchPriority="high"
        className="scale z-0 pointer-events-none absolute   size-80 md:size-[36rem]"
        style={{ bottom: 0, left: 0 }}
      />
      <Image
        src={"/purpleBR2.png"}
        alt={"downRight"}
        width={20}
        loading="eager"
        fetchPriority="high"
        height={20}
        className="scale z-0 pointer-events-none absolute  size-96 md:size-[36rem]"
        style={{ bottom: 0, right: 0 }}
      />
    </>
  );
}

export default BlurBGColors;
