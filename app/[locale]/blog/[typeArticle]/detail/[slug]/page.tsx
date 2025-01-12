import { i18nNamespaces } from "@/app/_lib/common";
import { genertateArticleData } from "@/app/_lib/helpers";
import initTranslations from "@/app/i18n";
import DetailsSection from "@/components/Details/DetailsSection/DetailsSection";
import Header from "@/components/Header";
import ImageCard from "@/components/UIElement/ImageCard";
import ViewAll from "@/components/UIElement/ViewAll";
import { TParams } from "@/types/params";
import Image from "next/image";
import React, { FC } from "react";

const singleDetails: FC<TParams> = async ({
  params: { locale, slug, typeArticle },
}) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  const data = genertateArticleData(t);

  const singleData = data?.[+(slug as any) - 1];
  const relatedArticle = data
    ?.filter((item) => item?.id !== singleData?.id)
    .slice(0, 3);

  return (
    <section className="containerSection">
      <div className="flex flex-col justify-center items-center text-center mb-10">
        <p className="text-lg text-darkgray leading-6 my-6">
          {singleData.date} . {singleData.type}
        </p>
        <Header
          title={singleData.title}
          description={t("healthyEating")}
          classDescription="text-darkgray mt-4"
        />
      </div>
      <Image
        src={singleData.image}
        alt={singleData.title}
        layout="intrinsic"
        height={600}
        className="h-[660px] w-full"
      />
      <div className="flex flex-col justify-center items-center mt-[50px]">
        <DetailsSection />
      </div>
      <ViewAll text={t("newest")} title={t("recentArticles")} />
      <div className="flex justify-between flex-wrap gap-y-6 mt-[50px]">
        {relatedArticle.map((item) => (
          <ImageCard
            text={item.title}
            image={item.image}
            key={item.id}
            slug={item.id}
            typeArticle={typeArticle}
            type={item.type}
            date={item.date}
          />
        ))}
      </div>
    </section>
  );
};

export default singleDetails;
