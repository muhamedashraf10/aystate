import React from "react";
import File from "@/assets/svg/file.svg";
import Image from "next/image";

type TCardDicover = {
  title: string;
  description: string;
};

const CardDiscover = ({ title, description }: TCardDicover) => {
  return (
    <div className="w-full mb-[24px] lg:w-[405px]">
      <div className="bg-daimond rounded-full w-16 h-16 flex items-center justify-center">
        <Image src={File} alt="file" />
      </div>
      <p className="text-[32px] font-[700] my-6">{title}</p>
      <p className="leading-6">{description}</p>
    </div>
  );
};

export default CardDiscover;
