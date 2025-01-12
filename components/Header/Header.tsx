import { THeader } from "@/types/header";
import React, { FC, memo } from "react";

const Header: FC<THeader> = ({
  title = "",
  description = "",
  subTitle = "",
  header = "",
  classDescription = "",
  children,
  classContent = "",
  classHeader = "",
  width = " w-full lg:w-[616px]",
  subTitleColor = "text-black",
  subDescription = "",
  isBadge = false,
  widthBadge = "",
  classBadge = "",
}) => {
  return (
    <div className={`${classHeader}`}>
      <div className={`${classContent}`}>
        <div className={`${width}`}>
          <div className={`${classBadge}`}>
            {subTitle && (
              <p
                className={`text-base font-[600] mb-4 ${subTitleColor} ${widthBadge} ${
                  isBadge ? "bg-bgBadge rounded-[40px] py-[12px] px-[16px]" : ""
                }`}
              >
                {subTitle}
              </p>
            )}
          </div>
          {header && <h1 className="text-[56px] font-[700]">{header}</h1>}
          {title && (
            <p className="lg:text-[48px] text-[32px] lg:leading-[58px] leading-[38px] uppercase font-[700]">
              {title}
            </p>
          )}
        </div>
        <div className="mt-[20px] lg:mt-0">
          {description && (
            <p className={`text-lg ${width} ${classDescription}`}>
              {description}
            </p>
          )}
          {children}
          {subDescription && (
            <p className="text-base leading-4 font-[600] mt-8 text-darkgray">
              {subDescription}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
