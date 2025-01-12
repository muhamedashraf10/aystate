"use client";

import { useTranslation } from "react-i18next";
import React from "react";
import Header from "@/components/Header";
import { genertateSimplifyData } from "@/app/_lib/helpers";
import CardSimplify from "./CardSimplify";

const SimplifyHome = () => {
  const { t } = useTranslation();
  const simplifyData = genertateSimplifyData(t);
  return (
    <section className="containerSection">
      <Header
        subTitle={t("simplify")}
        title={t("simplifyTitle")}
        description={t("simplifyDesc")}
        classHeader={"flex justify-center"}
        classDescription="text-center my-4"
        classContent="text-center"
        width=" w-full lg:w-[768px]"
      />
      <div className="flex justify-between flex-wrap my-24">
        {simplifyData.map((simplify) => (
          <CardSimplify
            title={simplify.title}
            key={simplify.id}
            description={simplify.description}
            image={simplify.image}
          />
        ))}
      </div>
    </section>
  );
};

export default SimplifyHome;
