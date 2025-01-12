"use client";

import React from "react";
import Header from "../Header";
import { useTranslation } from "react-i18next";
import { genertateQuestionFaqsData } from "@/app/_lib/helpers";
import IconCard from "../UIElement/IconCard";

const QuestionFAQS = () => {
  const { t } = useTranslation();
  const cardData = genertateQuestionFaqsData(t);

  return (
    <section className="containerSection">
      <div className="flex  items-center justify-center text-center whitespace-pre-line">
        <Header
          width="w-full"
          title={t("stillQuestion")}
          description={t("stillQuestionDesc")}
          classDescription="text-darkgray mt-8"
        />
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

export default QuestionFAQS;
