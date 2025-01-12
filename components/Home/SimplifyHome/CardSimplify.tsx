import Image, { StaticImageData } from "next/image";
import React from "react";

type TCardSimplify = {
  title: string;
  image: StaticImageData;
  description: string;
};

const CardSimplify = ({ title, description, image }: TCardSimplify) => {
  return (
    <div className="mb-[48px] w-full lg:w-[405px]">
      <Image className="h-[240px] w-[405px]" src={image} alt={title} />
      <div className="flex items-center justify-center flex-col">
        <p className="text-[32px] font-[700] my-6 text-center">{title}</p>
        <p className="text-center leading-6">{description}</p>
      </div>
    </div>
  );
};

export default CardSimplify;
