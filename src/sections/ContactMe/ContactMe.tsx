import ContactMeForm from "@/components/ContactMe/ContactMeForm";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AtSign } from "lucide-react";
import Image from "next/image";
import React from "react";

function ContactMe() {
  useGSAP(() => {
    gsap.from(".contactMeAnimate", {
      opacity: 0,
      y: -50,
      // scale: 0,
      scrollTrigger: {
        trigger: ".contactMeSection",
        start: "20% center",
        markers: false,
      },
      stagger: {
        each: 0.1,
      },
    });
  });
  return (
    <div className="contactMeSection bottom-0 bg-colorBrandPurple900dark text-colorBrandWhiteYellow100light px-4 py-20 sm:px-20">
      <div className=" text-textsizebrandh2 mb-4 font-black leading-none md:text-textsizebrandh1">
        <h6 className="contactMeAnimate">הגעתם עד לכאן?</h6>
        <h6 className="contactMeAnimate">יאללה, זה הזמן לעבוד כמו שצריך !</h6>
        <p className="contactMeAnimate mt-2 text-textsizebrandh3 text-colorBrandPink500dark">
          בחרו מה שנוח לכם, ואני אדאג לשאר
        </p>
      </div>
      <div className="mt-6 flex flex-col gap-8 lg:flex-row">
        <div className="leading-none">
          <h4 className="contactMeAnimate text-textsizebrandh5 font-black">
            שונאים טפסים?
          </h4>
          <h5 className="contactMeAnimate text-textsizebrandh5 font-black">
            שלחו לי הודעה
          </h5>
          <div className="mt-4 space-y-4">
            <div className="flex flex-row items-center gap-4">
              <Image
                src={"/whatsapp.svg"}
                alt={"whatsapp link"}
                width={40}
                height={40}
                className="contactMeAnimate size-8 lg:size-10"
              />
              <a
                className="contactMeAnimate text-textsizebrandh6 font-normal"
                href="https://wa.me/message/BAPSKBNTSV6GA1"
              >
                {" "}
                0547520899
              </a>
            </div>
            <div className="flex flex-row items-center gap-4">
              <AtSign
                size={40}
                className="contactMeAnimate size-8 lg:size-10"
              />
              <a
                className="contactMeAnimate text-textsizebrandh6 font-normal"
                href="mailto:origuy@origuystudio.com"
              >
                {" "}
                origuy@origuystudio.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-2 border-colorBrandWhiteYellow100lightOpacity"></div>

        <div className="leading-none lg:w-5/12">
          <h4 className=" contactMeAnimate text-textsizebrandh5 font-black">
            אוהבים טפסים?
          </h4>
          <h5 className=" contactMeAnimate text-textsizebrandh5 font-black">
            שלחו לי הודעה
          </h5>
          <div className="mt-4 space-y-4">
            <ContactMeForm />
          </div>
        </div>
      </div>
      <a
        href="http://origuystudio.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <Image
          src={"/fullLogoWhiteSVG.svg"}
          width={72}
          height={72}
          alt={"studio ori guy"}
          className="contactMeAnimate mx-auto mt-16 mb-2"
        />
      </a>
    </div>
  );
}

export default ContactMe;
