"use client";
import Image from "next/image";
import React from "react";
import Seperate from "@/assets/svg/seperate.svg";

type TStaticText = {
  title: string;
  text: string;
};
const StaticText = ({ title, text }: TStaticText) => {
  return (
    <div className="my-[21px]">
      <div className="flex gap-2 items-center mb-[24px]">
        <Image src={Seperate} alt="" width={14} height={2} />
        <h4 className="text-xl font-[700] leading-7">{title}</h4>
      </div>
      <p className="text-lg leading-[28px] text-darkgray whitespace-pre-line">
        {text}
      </p>
    </div>
  );
};

export default StaticText;
