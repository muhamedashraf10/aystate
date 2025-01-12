import React from "react";
import MetalIcon from "@/assets/svg/medal-star.svg";
import Image from "next/image";

export const BenfitCard = () => {
  return (
    <div className="py-[32px] px-[24px]">
      <Image alt="Metal" src={MetalIcon} />
      <p className="font-[700] text-[28px] leading-[36px] my-[24px] text-white">
        Best Small Companies
      </p>
      <p className="text-sm leading-5 text-[#C7C1EA]">
        Elit ornare nibh dictum viverra quam placerat. Lobortis eleifend risus
        pretium consectetur eros.
      </p>
    </div>
  );
};
