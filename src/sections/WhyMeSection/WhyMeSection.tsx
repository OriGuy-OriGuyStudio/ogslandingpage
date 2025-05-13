import ListWhtMe from "@/components/WhyMe/ListWhtMe";
import MainTitles from "@/components/WhyMe/MainTitles";
import StepByStepFlow from "@/components/WhyMe/StepByStepFlow";
import StepByStepTitles from "@/components/WhyMe/StepByStepTitles";
import { Sparkle, StepForward } from "lucide-react";
import Image from "next/image";
import React from "react";
export interface StepProps {
  icon: any;
  stage: string;
  title: string;
  secondaryTitle: string;
  text: string;
}

function WhyMeSection() {
  return (
    <section className="  relative overflow-x-hidden lg:grid-cols-12 lg:grid-rows-1 lg:items-start   text-colorBrandWhiteYellow100light bg-colorBrandPurple900dark grid grid-cols-4 place-content-center px-4 md:px-20  py-10 lg:py-20 ">
      <Image
        src={"/purpleCT2.png"}
        alt={"upRight"}
        width={0}
        height={0}
        className="pointer-events-none absolute w-full z-10  top-0   place-self-center "
        // style={{ top: '-100px' }}
      />
      <MainTitles />
      <ListWhtMe />
      <StepByStepTitles />
      <StepByStepFlow />
    </section>
  );
}

export default WhyMeSection;
