"use client";
import LinearGradientImage from "@/components/UIElement/LinearGradientImage";
import Image from "next/image";
import React from "react";
import HomeState from "@/assets/homeState.png";
import { genertateArticleData } from "@/app/_lib/helpers";
import { useTranslation } from "react-i18next";
import ImageCard from "@/components/UIElement/ImageCard";

const GalaryBlog = () => {
  const { t } = useTranslation();
  const data = genertateArticleData(t);
  const galaryData = data.slice(0, 3);

  return (
    <section className="containerSection">
      <div className="flex  gap-[30px]">
        <LinearGradientImage borderRaduis="rounded-[16px]">
          <Image
            height={558}
            width={690}
            src={HomeState}
            layout="intrinsic"
            alt="home state image"
            className="w-[750px] h-[500px]"
          />
          <div className="absolute bottom-0 text-white z-[1000] p-4 w-[557px]">
            <p className="text-lg text-darkgray font-[600] leading-6 ">
              23 Des 2023 . Success Stories
            </p>
            <h5 className="text-2xl font-[700] leading-8 text-white my-[12px]">
              Luxury Living: Exploring High-End Real Estate Markets
            </h5>
            <p className="text-lg text-darkgray font-[600] leading-6 ">
              23 Des 2023 . Success Stories
            </p>
          </div>
        </LinearGradientImage>
        <div className="w-[520px] h-[55bpx] flex flex-col justify-between">
          {galaryData.map((item) => (
            <ImageCard
              classes="w-[520px]"
              date={item.date}
              key={item.id}
              slug={item.id}
              type={item.type}
              text={item.title}
              image={item.image}
              isFlex={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalaryBlog;
