"use client";

import React from "react";
import Header from "../Header";
import SearchBar from "../UIElement/SearchBar";
import { useTranslation } from "react-i18next";
import { genertateData } from "@/app/_lib/helpers";
import IconCard from "../UIElement/IconCard";

const HelpingSerachFaqs = () => {
  const { t } = useTranslation();
  const cardData = genertateData(t);

  return (
    <section className="containerSection">
      <div className="flex flex-col items-center justify-center text-center">
        <Header
          title={t("helpingPriority")}
          subDescription={t("improveFaq")}
          width="w-full"
        >
          <div className="mt-16">
            <SearchBar />
          </div>
        </Header>
      </div>
      <div className="flex justify-between mt-24">
        {cardData.map((card) => (
          <IconCard
            title={card.title}
            description={card.description}
            key={card.id}
            icon={card.image}
          />
        ))}
      </div>
    </section>
  );
};

export default HelpingSerachFaqs;
