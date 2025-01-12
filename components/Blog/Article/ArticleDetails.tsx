import { genertateArticleData } from "@/app/_lib/helpers";
import ImageCard from "@/components/UIElement/ImageCard";
import CustomPagination from "@/components/UIElement/Pagination";
import ViewAll from "@/components/UIElement/ViewAll";
import { TLanguage } from "@/types/language";
import { TTypeArticle } from "@/types/params";
import React from "react";

type TArticleDetails = {
  t: TLanguage;
  typeArticle?: TTypeArticle;
};

export default function ArticleDetails({ t, typeArticle }: TArticleDetails) {
  const data = genertateArticleData(t);

  return (
    <section className="containerSection">
      <ViewAll
        isButton={false}
        text={t("newest")}
        title={
          typeArticle === "popular-article"
            ? t("popularArticles")
            : t("recentArticles")
        }
      />
      <div className="flex justify-between flex-wrap gap-y-6 mt-24">
        {data.map((item) => (
          <ImageCard
            text={item.title}
            image={item.image}
            typeArticle={typeArticle}
            key={item.id}
            slug={item.id}
            type={item.type}
            date={item.date}
          />
        ))}
      </div>

      <CustomPagination />
    </section>
  );
}
