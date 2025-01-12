import React from "react";
type THeroCard = {
  title: string;
  text: string;
};
const HeroCard = ({ text, title }: THeroCard) => {
  return (
    <div>
      <p className="text-[28px] font-[700] leading-[36px] mb-[12px]">{title}</p>
      <p className="text-lg leading-[28px] text-textGray">{text}</p>
    </div>
  );
};

export default HeroCard;
