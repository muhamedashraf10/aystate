"use client";
import LinearGradientImage from "@/components/UIElement/LinearGradientImage";
import ViewAll from "@/components/UIElement/ViewAll";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import Blog1 from "@/assets/ImageBlog1.png";
import Blog2 from "@/assets/ImageBlog2.png";

const PopularArticle = () => {
  const { t } = useTranslation();

  return (
    <section className="containerSection">
      <ViewAll
        text={t("popularArticlesDesc")}
        isPopular={true}
        title={t("popularArticles")}
      />
      <div className="flex items-center justify-between gap-[30px] mt-[50px]">
        <LinearGradientImage borderRaduis="rounded-[16px]">
          <Image src={Blog1} alt="" />
          <div className="absolute bottom-0 text-white z-[1000] p-4 w-[557px]">
            <p className="text-lg text-darkgray font-[600] leading-6 ">
              23 Des 2023 . Success Stories
            </p>
            <p className="text-2xl font-[700] leading-8 text-white my-[12px]">
              Luxury Living: Exploring High-End Real Estate Markets
            </p>
            <p className="text-lg text-darkgray font-[600] leading-6 ">
              23 Des 2023 . Success Stories
            </p>
          </div>
        </LinearGradientImage>
        <LinearGradientImage borderRaduis="rounded-[16px]">
          <Image src={Blog2} alt="" className="relative" />
          <div className="absolute bottom-0 text-white z-[1000] p-4 w-[557px]">
            <p className="text-lg text-darkgray font-[600] leading-6 ">
              23 Des 2023 . Success Stories
            </p>
            <p className="text-2xl font-[700] leading-8 text-white my-[12px]">
              Luxury Living: Exploring High-End Real Estate Markets
            </p>
            <p className="text-lg text-darkgray font-[600] leading-6 ">
              23 Des 2023 . Success Stories
            </p>
          </div>
        </LinearGradientImage>
      </div>
    </section>
  );
};

export default PopularArticle;
