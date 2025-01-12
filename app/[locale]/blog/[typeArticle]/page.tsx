import { i18nNamespaces } from "@/app/_lib/common";
import initTranslations from "@/app/i18n";
import ArticleDetails from "@/components/Blog/Article/ArticleDetails";
import { TParams } from "@/types/params";
import React, { FC } from "react";

const Article: FC<TParams> = async ({ params: { locale, typeArticle } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return <ArticleDetails t={t} typeArticle={typeArticle} />;
};

export default Article;
