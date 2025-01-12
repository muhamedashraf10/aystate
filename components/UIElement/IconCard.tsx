import Image from "next/image";
import React from "react";

type TIconCard = {
  icon: string;
  title: string;
  description: string;
  subTitle?: string;
};

const IconCard = ({ icon, title, description, subTitle }: TIconCard) => {
  return (
    <div className="p-6 border border-borderSmoke rounded-2xl w-[400px] text-center flex flex-col items-center ">
      <div className="bg-daimond rounded-full w-16 h-16 flex items-center justify-center mb-8">
        <Image src={icon} alt="" />
      </div>
      <h5 className="text-2xl font-[700] leading-8 ">{title}</h5>
      <p className="text-darkgray text-lg leading-7 my-8">{description}</p>
      {subTitle && (
        <h6 className="text-base font-[700] leading-5 ">{subTitle}</h6>
      )}
    </div>
  );
};

export default IconCard;
