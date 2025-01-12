"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import stars from "@/assets/Stars.png";
import avatar from "@/assets/avatar.png";
import Image from "next/image";

const TestimonialsHome = () => {
  const { t } = useTranslation();

  return (
    <section className="containerSection bg-rose flex flex-col items-center justify-center text-center">
      <p className="text-[48px] font-[700] mb-8">{t("testimonials")}</p>
      <Image src={stars} alt="stars" />
      <p className="font-[700] w-full lg:w-[786px] text-2xl leading-8 my-6">
        {t("testimonialsDesc")}
      </p>
      <div className="flex w-[209px] items-center text-start justify-between">
        <Image src={avatar} alt="stars" />
        <div className="pt-2">
          <p className="font-[600] leading-6">{t("john")}</p>
          <p className="leading-6">{t("ceo")}</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsHome;
