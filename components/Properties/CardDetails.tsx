import { TLanguage } from "@/types/language";
import React from "react";

const CardDetails = ({ t }: TLanguage) => {
  return (
    <div className="grid grid-cols-2 gap-8 w-[464px]">
      <div>
        <p className="text-xl font-[700] leading-5 mb-2 ">{t("client")}</p>
        <span className="text-base font-[400] leading-6">{t("john")}</span>
      </div>
      <div>
        <p className="text-xl font-[700] leading-5 mb-2 ">{t("date")}</p>
        <span className="text-base font-[400] leading-6">{t("day")}</span>
      </div>
      <div>
        <p className="text-xl font-[700] leading-5 mb-2 ">{t("location")}</p>
        <span className="text-base font-[400] leading-6">{t("indonesia")}</span>
      </div>
      <div>
        <p className="text-xl font-[700] leading-5 mb-2 ">{t("price")}</p>
        <span className="text-base font-[400] leading-6">
          {t("$3,000,000")}
        </span>
      </div>
    </div>
  );
};

export default CardDetails;
