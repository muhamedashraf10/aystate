import React from "react";
import Header from "../Header";
import { TLanguage } from "@/types/language";
import Image from "next/image";
import image1 from "@/assets/content.png";
import image2 from "@/assets/content1.png";
import image3 from "@/assets/content2.png";

const ContentDetails = ({ t }: TLanguage) => {
  return (
    <section className="flex justify-between containerSection">
      <Header title={t("stunning")} width="w-[464px]">
        <div className="w-[464px] mt-8">
          <p className="text-base font-[400] leading-6">{t("desc1")}</p>
          <p className="text-base font-[400] leading-6 my-4">{t("desc2")}</p>
          <p className="text-base font-[400] leading-6">{t("desc3")}</p>
        </div>
      </Header>
      <div className="grid grid-col-1 gap-12">
        <Image src={image1} alt="" className="w-[768px]" />
        <Image src={image2} alt="" className="w-[768px]" />
        <Image src={image3} alt="" className="w-[768px]" />
      </div>
    </section>
  );
};

export default ContentDetails;
