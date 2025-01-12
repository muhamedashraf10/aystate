"use client";

import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import React from "react";
import { useTranslation } from "react-i18next";
import { Roboto } from "next/font/google";
import { genertateInnovativeData } from "@/app/_lib/helpers";
import Link from "next/link";
import { routes } from "@/routes";

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

const InnovativeHome = () => {
  const { t } = useTranslation();
  const innovative = genertateInnovativeData(t);

  return (
    <section className="bg-darkblack containerSection ">
      <Header
        subTitle={t("innovative")}
        title={t("innovativeTitle")}
        description={t("innovativeDesc")}
        classDescription="text-white mb-8"
        classContent="text-white flex flex-col lg:flex-row justify-between"
        subTitleColor="text-white"
      >
        <Link href={routes.AboutUs}>
          <Button aria-label="learn" size={"lg"}>
            {t("learn")}
          </Button>
        </Link>
      </Header>
      <div className="flex flex-wrap justify-between items-start mt-20">
        {innovative.map((item) => (
          <div
            key={item.id}
            className="border-l-2 px-5 text-white w-[405px] my-4"
          >
            <p
              className={`text-[80px] font-[700] leading-[104px] ${roboto.className}`}
            >
              {item.percentage}
            </p>
            <p className="font-[700] text-xl leading-7">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InnovativeHome;
