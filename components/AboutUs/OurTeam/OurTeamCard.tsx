import React from "react";
import Social from "@/assets/SocialIcons.png";
import Image from "next/image";
import people1 from "@/assets/people1.png";

const OurTeamCard = () => {
  return (
    <div className="flex justify-bettwe items-center flex-col w-[304px] gap-[24px]">
      <Image src={people1} alt="my photo" width={80} height={80} />
      <div className="text-center">
        <p className="text-xl font-[600] leading-[30px]">
          Muhammad Abubakar A.
        </p>
        <p className="text-lg leading-[27px] mb-[16px]">Director</p>
        <p className="text-base leading-[24px] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
      </div>
      <Image src={Social} alt="social media" className="w-[100px]" />
    </div>
  );
};

export default OurTeamCard;
