"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";

const StartProjectHome = () => {
  const { t } = useTranslation();

  return (
    <section className="containerSection flex flex-col items-center justify-center text-center whitespace-pre-line bg-gradient-to-r from-darkblue via-darkblack to-darkblue ">
      <p className="text-[48px] text-white font-[700] leading-[80px]">
        {t("successfulProject")}
      </p>
      <p className={"text-lg text-white leading-7 my-11"}>
        {t("successfulProjectDesc")}
      </p>
      <Button size={"xl"} aria-label="start Project" variant={"roundFull"}>
        {t("startProject")}
        <ArrowUpRight className="ml-3" />
      </Button>
    </section>
  );
};

export default StartProjectHome;
