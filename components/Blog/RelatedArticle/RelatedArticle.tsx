"use client";
import { genertateArticleData } from "@/app/_lib/helpers";
import ImageCard from "@/components/UIElement/ImageCard";
import ViewAll from "@/components/UIElement/ViewAll";
import React from "react";
import { useTranslation } from "react-i18next";

const RelatedArticle = () => {
  const { t } = useTranslation();
  const data = genertateArticleData(t);
  const relatedArticle = data.slice(0, 3);

  return (
    <section className="containerSection mb-[224px]">
      <ViewAll text={t("newest")} title={t("recentArticles")} />
      <div className="flex justify-between flex-wrap gap-y-6 mt-[50px]">
        {relatedArticle.map((item) => (
          <ImageCard
            text={item.title}
            image={item.image}
            key={item.id}
            slug={item.id}
            type={item.type}
            date={item.date}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedArticle;
