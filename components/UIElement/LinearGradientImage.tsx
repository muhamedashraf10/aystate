import Image from "next/image";
import React, { PropsWithChildren } from "react";
import a from "@/assets/explore.png";

type TLinearGradientImage = PropsWithChildren & {
  classes?: string;
  borderRaduis?: string;
};
const LinearGradientImage = ({
  children,
  classes = "",
  borderRaduis = "rounded-xl",
}: TLinearGradientImage) => {
  return (
    <div className={`relative ${classes}`}>
      <div
        className={`absolute w-full h-full z-50 bg-custom-gradient ${borderRaduis}`}
      ></div>
      {children}
    </div>
  );
};

export default LinearGradientImage;
